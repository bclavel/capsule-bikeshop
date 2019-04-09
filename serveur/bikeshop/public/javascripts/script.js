function trash() {
  document.getElementById('trash').addEventListener('click',
      function(){
        console.log(this);
        this.parentNode.parentNode.remove()
      });
}
