new Vue({
    el: '#app',
    data: {
        display: true,
        methods: {
        	dataDisplay: function(){
        		this.display = !this.display
        	}
        }
    }
})
