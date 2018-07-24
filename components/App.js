App = React.createClass({
    
    getInitialState(){
        return{
            loading: false,
            searchingText: '',
            gif: {}

        }
    },

    handleSearch: function(searchingText){
        
        this.setState({
        loading: true
        })

        console.log(searchingText)
        this.getGif(searchingText)
        .then(function(gif) {
            console.log(gif)
         
            this.setState({
                loading: false,
                gif: gif,
                searchingText: searchingText
            })
        
        }.bind(this))
    
    .catch(function(error){
        console.log('something went wrong' + error)
    })
},   


     
getGif: function(searchingText) {  // 1.
    console.log(searchingText);
// here I start with a promise 
    return new Promise(
        function(resolve, reject){
            
           

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
                    resolve(gif);  
                }else{
                    reject(xhr.error); 
                }
           

            }
        // here is code with promises
        xhr.send();
        
        }
    )    
   
},

    
    render: function(){
       
        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        }
    
    return(
        <div style={styles}>
            <h1>Wyszukiwarka gifów </h1>
            <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a> Naciskaj enter aby pobrać kolejne gify </p>
            <Search 
                onSearch={this.handleSearch}
            
            />
            <Gif 
                loading={this.state.loading}
                url={this.state.gif.url}
                sourceUrl={this.state.gif.sourceUrl}
            />
        </div>    
    )
    
    
    }
})