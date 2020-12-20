window.onload = function(){
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	var img = document.getElementsByTagName("img")[0];
	var imgArr = ["img/7.jpg","img/8.jpg","img/9.jpg","img/10.jpg","img/11.jpg","img/12.jpg","img/13.jpg","img/14.jpg","img/15.jpg","img/16.jpg","img/17.jpg","img/18.jpg","img/19.jpg","img/20.jpg","img/21.jpg","img/22.jpg","img/23.jpg","img/24.jpg","img/25.jpg","img/26.jpg","img/27.jpg"]
	var index = 0;
	setInterval(function(){
		index++;
		index = index % imgArr.length;
		img.src = imgArr[index];
	},2000)
	prev.onclick = function(){
		index--;
		if(index<0){
			index=imgArr.length-1;
		}
		img.src = imgArr[index];
		}
		next.onclick = function(){
			index++;
			if(index>imgArr.length-1){
				index=0;
			}
			img.src = imgArr[index];
		};
	}
	function tankuang(id) {
		return document.getElementById(id);
	}
	function divshow() {
		var d5 = tankuang("d5");
		d5.style.display = "block";
	}
	function divclose() {
		d5.style.display = "none";
	}
	function divshow1() {
		var d77 = tankuang("d77");
		var videofile = tankuang("videofile");
		d77.style.display = "block";
		videofile.play();
	}
	function divclose1() {
		d77.style.display = "none";
		videofile.pause();
	}
		

