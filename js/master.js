var Body = {
  setFont : function(fontSize){
    $('body').css('fontSize', fontSize);
  }
};

var Article = {
  setFont : function(fontSize){
    $('#article').css('fontSize', fontSize);
  },
  setPaddingLeft : function(paddingLeft){
    $('#article').css('paddingLeft', paddingLeft);
  }
};

var Grid = {
  setWidth : function(width){
    $('#grid ol').css('width', width);
  }
};

function upDownHandler(self){
  if(self.value=='sizeup'){
    Body.setFont('20px');
    Grid.setWidth('270px');
    Article.setFont('25px');
    Article.setPaddingLeft('80px');
    self.value='sizeDown';
  } else {
    Body.setFont('15px');
    Grid.setWidth('210px');
    Article.setFont('20px');
    Article.setPaddingLeft('25px');
    self.value='sizeup';
  }
}
