Search = React.createClass({
    render: function(){
        
        var styles = {
            fontSize: '1.5em',
            width: '90%',
            maxWith: '350px'
        }

        return ( <input 
        type="text"
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
        placeholder="Tutaj wpisz wyszukiwaną frazę"
        style={styles}
        value={this.state.searchTerm}
        />
        )
    },  
       

        handleChange: function(event){
            var searchingText = event.target.value;
            this.setState({
                searchingText: searchingText
            });
           
            if(searchingText.length > 2){
                this.props.onSearch(searchingText);
            }
        },    

            
       

        handleKeyUp: function(event){
            if(event.keyCode === 13){
                this.props.onSearch(this.state.searchingText)
            }
        },


        handleSearch: function(searchingText){
                this.seState({
                loading: true
        });

        this.getGif(searchingText, function(gif){
                
                this.setStae({
                    loading: false,
                    gif: gif,
                    searchingText: searchingText

                });
            }.bind(this))
        
        },

        


        getGif: function(searchingText, callback) {  // 1.
            var GIPHY_PUB_KEY = 'qQteLldC6e5Gu8eePBMBx8cQEyvMK32B';
            var GIPHY_API_URL  = 'http://api.giphy.com';
           

            var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;  // 2.
            var xhr = new XMLHttpRequest();  // 3.
            xhr.open('GET', url);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    console.log(xhr.response);
                    var data = JSON.parse(xhr.responseText).data; // 4.

                    var gif = {  // 5.
                        url: data.fixed_width_downsampled_url,
                        sourceUrl: data.url
                    };
                    callback(gif);  // 6.
                }
            };
            xhr.send();
        },
})       
       
        
   