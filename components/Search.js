Search = React.createClass({
    
    getInitialState(){
        return{
            loading: false,
            searchingText: '',
            gif: {}

        }
    },
    
    
    
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
        value={this.state.searchingText}
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
})       
       
        
   