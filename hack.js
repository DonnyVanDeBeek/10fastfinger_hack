var word = {
	current: 0,
	value: '',
	attribute: 'wordnr',
	input_id: 'inputfield',

	next: function(){
		var selector = '['+this.attribute+'="'+this.current+'"]';
		this.value = document.querySelectorAll(selector)[0].innerHTML;
		this.current++;
	},

	paste: function(){
		document.getElementById(this.input_id).value = this.value;
	},

	run_auto: function(){
		if(document.getElementById(word.input_id).value === ''){
			word.paste();
			word.next();
		}
	}
};

setInterval(word.run_auto, 1);