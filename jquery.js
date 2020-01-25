$(document).ready(function() {
  let state = [];
  let clickCount = 0;
  let clickCurrent = null;
  let clickPrev = null;

  function master() {
    // alert('Welcome to game');
    putData();
    app.start();
  }

  function putData() {
    let cards = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
    for (let i in cards) {
      state.push({ id: i, value: cards[i], clickable: true });
    }
  }

  const app = {
    start: function() {
      // console.log(state)
      $(".card").each(function(index) {
        $(this).attr('id',state[index].id)
        if(state[index].clickable===false){
          $(this).css('background-color','black')
        }else{
          $(this).css('background-color','orangered')
        }
      })
      app.clickEvent();
    },
    clickEvent:function(){
      $('.card').click(function(e){
        clickCount=clickCount+1
        let clicked=parseInt($(this).attr('id'))
        $(this).css('background-color','lightgreen')
        $(this).text(state[clicked].value)
        clickCurrent=clicked;
        app.clickMatch();
      })
    },
    clickMatch:function(){
      if(state[clickPrev]=undefined && state[clickPrev].value===state[clickCurrent].value){
        console.log('here')
      }
      else{
        clickPrev=clickCurrent;
      }
    }
  };























  // const app = {
  // state:[],
  // clicks:0,
  // matches:0,
  // assignNull:function(){
  //     $('.card').each(function(values){
  //       let value=$(this).attr('value')
  //       $(this).text('')
  //     })
  //   },
  //   assignValues: function(){
  //     $('.card').each(function(values){
  //       $(this).attr('value',app.state[values].value)
  //       $(this).attr('status',app.state[values].status)
  //       if(app.state[values].status===false){
  //         $(this).css('background-color',"black")
  //       }
  //     })
  //     app.clickEvent();
  //   },
  //   clickEvent:function() {
  //     $('.card').click(function(e){
  //       app.clicks=app.clicks+1
  //       let value = $(this).attr('value');
  //       $(this).text(value);
  //       $(this).css('background-color','lightgreen')
  //       if(app.matches===parseInt(value)){
  //         for(let i=0;i<app.state.length;i++){
  //           if(app.state[i].value===app.matches){
  //             $(this).text('');
  //         app.state[i].status=false;
  //         app.matches=0;
  //         console.log(app.matches)
  //       }
  //     }
  //     refresh();
  //         // app.matches=0;
  //       }else{
  //         app.matches=parseInt(value);
  //         // app.assignNull();
  //       }
  //       // console.log('current value',app.matches)
  //     })
  //     // refresh();
  //   }
  // };

  master();
});
