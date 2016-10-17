// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//





    
  function anoigma_profil_deksia(){
        $( ".ola_ta_profil_deksia" ).show();
        $( ".ola_ta_profil_aristera" ).hide();
        $( ".ola_ta_profil_panw" ).hide();
        $( ".ola_ta_profil_katw" ).hide();
        $( ".label_profil" ).css("background-color","");//Ετσι αφαιρω την ιδιοτητα!!!
        $( ".label_profil" ).css("color","");

        $( ".ola_ta_profil_aristera_color" ).hide();
        $( ".ola_ta_profil_panw_color" ).hide();
        $( ".ola_ta_profil_katw_color" ).hide();

        if (sunolika_profil_deksia > 0 && profil_deksia_counter > 0){
            $(".ola_ta_profil_deksia_color").show();
        }
        //
        //$( "#deksia" ).css("background-color","#CA3333");
        $( "#deksia" ).css("background-color","#777777");
        $( "#deksia" ).css("color","white");
     
  }
  


  function anoigma_profil_aristera(){
        $( ".ola_ta_profil_deksia" ).hide();
        $( ".ola_ta_profil_aristera" ).show();
        $( ".ola_ta_profil_panw" ).hide();
        $( ".ola_ta_profil_katw" ).hide();
        $( ".label_profil" ).css("background-color","");//Ετσι αφαιρω την ιδιοτητα!!!
        $( ".label_profil" ).css("color","");

        $( ".ola_ta_profil_deksia_color" ).hide();
        $( ".ola_ta_profil_panw_color" ).hide();
        $( ".ola_ta_profil_katw_color" ).hide();

        if (sunolika_profil_aristera > 0 && profil_aristera_counter > 0){
            $(".ola_ta_profil_aristera_color").show();
        }
        //
        //$( "#aristera" ).css("background-color","#CA3333");
        $( "#aristera" ).css("background-color","#777777");
        $( "#aristera" ).css("color","white");

     
  }


  function anoigma_profil_panw(){
        $( ".ola_ta_profil_deksia" ).hide();
        $( ".ola_ta_profil_aristera" ).hide();
        $( ".ola_ta_profil_panw" ).show();
        $( ".ola_ta_profil_katw" ).hide();
        $( ".label_profil" ).css("background-color","");//Ετσι αφαιρω την ιδιοτητα!!!
        $( ".label_profil" ).css("color","");

        $( ".ola_ta_profil_aristera_color" ).hide();
        $( ".ola_ta_profil_deksia_color" ).hide();
        $( ".ola_ta_profil_katw_color" ).hide();

        if (sunolika_profil_panw > 0 && profil_panw_counter > 0){
            $(".ola_ta_profil_panw_color").show();
        }
        //
        //$( "#panw" ).css("background-color","#CA3333");
        $( "#panw" ).css("background-color","#777777");
        $( "#panw" ).css("color","white");
     
  }

  function anoigma_profil_katw(){
        $( ".ola_ta_profil_deksia" ).hide();
        $( ".ola_ta_profil_aristera" ).hide();
        $( ".ola_ta_profil_panw" ).hide();
        $( ".ola_ta_profil_katw" ).show();
        $( ".label_profil" ).css("background-color","");//Ετσι αφαιρω την ιδιοτητα!!!
        $( ".label_profil" ).css("color","");

        $( ".ola_ta_profil_aristera_color" ).hide();
        $( ".ola_ta_profil_panw_color" ).hide();
        $( ".ola_ta_profil_deksia_color" ).hide();

        if (sunolika_profil_katw > 0 && profil_katw_counter > 0){
            $(".ola_ta_profil_katw_color").show();
        }
        //
        //$( "#katw" ).css("background-color","#CA3333");
        $( "#katw" ).css("background-color","#777777");
        $( "#katw" ).css("color","white");
     
  }



//////////elefthero/////////////



function drawKASA(a, b, ar_ty, de_ty, pa_ty, ka_ty, apostasei_gia_katw_kasa_apo_panw){

      var max_width = 600;
      var max_height = 600;
      var min_width = 200; 
      var min_height = 200; 

      //Διαστημα = 5650
      var diastima_width = 6000 - 350;
      var analoga_width = a - 350;
      var pososto_width = analoga_width / diastima_width;
      var width  = ((600 - 200) * pososto_width) + 200;

      //Διαστημα = 2700
      var diastima_height = 6000 - 350;
      var analoga_height = b - 350;
      var pososto_height = analoga_height / diastima_height;
      var height  = ((600 - 200) * pososto_height) + 200;

      //alert(width);
      //alert(height);

      $(".kasa_panw").css("top",apostasei_gia_katw_kasa_apo_panw);
      $(".kasa_panw").css("width",width);
      $(".kasa_panw").css("height",pa_ty+"px");
      $(".kasa_panw").css("border","solid");
      $(".kasa_panw").css("border-color","transparent");
      $(".kasa_panw").css("border-width","1px"); 
      $(".kasa_panw").css("background-color","transparent");

      $(".kasa_aristera").css("top",apostasei_gia_katw_kasa_apo_panw);
      $(".kasa_aristera").css("height",height);
      $(".kasa_aristera").css("width",ar_ty+"px");
      $(".kasa_aristera").css("border","solid");
      $(".kasa_aristera").css("border-color","transparent");
      $(".kasa_aristera").css("border-width","1px");
      $(".kasa_aristera").css("background-color","transparent");

      $(".kasa_katw").css("position","absolute");
      $(".kasa_katw").css("left","650px");
      $(".kasa_katw").css("top",height + apostasei_gia_katw_kasa_apo_panw - ka_ty); // 7px height apostasei_gia_katw_kasa_apo_panw + $(".kasa_katw").offset().top-7
      $(".kasa_katw").css("width",width);
      $(".kasa_katw").css("height",ka_ty+"px");
      $(".kasa_katw").css("border","solid");
      $(".kasa_katw").css("border-color","transparent");
      $(".kasa_katw").css("border-width","1px");
      $(".kasa_katw").css("background-color","transparent");

      $(".kasa_deksia").css("top",apostasei_gia_katw_kasa_apo_panw);
      $(".kasa_deksia").css("position","absolute");
      $(".kasa_deksia").css("left",width + 650 - de_ty);
      $(".kasa_deksia").css("height",height);
      $(".kasa_deksia").css("width",de_ty+"px");
      $(".kasa_deksia").css("border","solid");
      $(".kasa_deksia").css("border-color","transparent");
      $(".kasa_deksia").css("border-width","1px");
      $(".kasa_deksia").css("background-color","transparent");

      var aristera_mesa_kasa = 650 + parseInt(ar_ty);
      var panw_kasa = parseInt(pa_ty);

      $(".eswteriko_kasas").css("position","absolute");
      $(".eswteriko_kasas").css("z-index","1");
      $(".eswteriko_kasas").css("left",aristera_mesa_kasa+"px");
      $(".eswteriko_kasas").css("top", apostasei_gia_katw_kasa_apo_panw + panw_kasa );
      $(".eswteriko_kasas").css("width",width - de_ty - ar_ty);
      $(".eswteriko_kasas").css("height",height - pa_ty - ka_ty);
      $(".eswteriko_kasas").css("border","solid");
      $(".eswteriko_kasas").css("border-width","1px"); 
      $(".eswteriko_kasas").css("background-color","#5EAFD2");
      

}



function metatropi_klimaka_kanoniko(olo, apostasi )
{

  var diastima_width = 6000 - 350;
  var analoga_width = olo - 350;
  var pososto_width = analoga_width / diastima_width;
  var meta = ((600 -200) * pososto_width) + 200;

  var mikro_pososto = (apostasi/meta);
  var width = olo*mikro_pososto;

  //alert("Όλο:"+olo);
  //alert("Μετά:"+meta);
  //alert("Πραγματικό μίκος:"+width);

  return width;
}

function diagrafi_xwrismatwn(ti_einai, poio_einai){
  Array_me_diegramena.push(poio_einai);
  if ( ti_einai == "1"){
    for(var key in pinakas_kath) {
      //console.log('key: ' + key + '\n' + 'class_1: ' + pinakas_kath[key].class_1 + ' class_2: ' + pinakas_kath[key].class_2);
      if ( ( pinakas_kath[key].class_1 == poio_einai ) || ( pinakas_kath[key].class_2 == poio_einai ) ){
        diagrafi_xwrismatwn(2,key);
      }
    }
  }else{
    for(var key in pinakas_ori) {
      //console.log('key: ' + key + '\n' + 'class_1: ' + pinakas_kath[key].class_1 + ' class_2: ' + pinakas_kath[key].class_2);
      if ( ( pinakas_ori[key].class_1 == poio_einai ) || ( pinakas_ori[key].class_2 == poio_einai ) ){
        diagrafi_xwrismatwn(1,key);
      }
    }

  }
  console.log(Array_me_diegramena);
}

  

  function kane_tetragwna(a, b, apostasi, x, y, athrisma, ori_kath, width_kasas){

    //Διαστημα = 5650
    var diastima_width = 6000 - 350;
    var analoga_width = a - 350;
    var pososto_width = analoga_width / diastima_width;
    var width  = ((600 -200) * pososto_width) + 200;

    //Διαστημα = 2700
    var diastima_height = 6000 - 350;
    var analoga_height = b - 350;
    var pososto_height = analoga_height / diastima_height;
    var height  = ((600 - 200) * pososto_height) + 200;

    height_zo = (apostasi/b)*(height); //upsos xwrismatos paxos 10;
    width_zo = (apostasi/a)*(width);

    if ( ori_kath == "1" ){
      var c = parseInt(y) - parseInt(height_zo) + 10
      console.log("upsos= "+ c);
      console.log("upsos= "+ apostasi);   
    }else{
      var c = parseInt(x) - parseInt(width_zo) + 10
      console.log("mikos= "+ c); 
    }

    var min = 9999999999;
    $('.tetragwno').each(function(){                                                                                                                            
      var $this = $(this);  
      console.log($this);
      console.log("top"+$this.offset().top);
      console.log("left"+$this.offset().left); 
      console.log("top_row"+Math.floor(y));  
      console.log("left_row"+Math.floor(x)); 
      if ( ori_kath == "1" ){
        var apotelesma =  (parseInt(y) - $this.offset().top) ;
        if ( ( apotelesma > 0 ) && ( Math.floor($this.offset().left) == Math.floor(x) ) ){
          class_tet = $(this).attr('class');
          class_tet_kali = (class_tet.split(' ')[0]);
          width_tetragwnou = $("."+class_tet_kali).outerWidth();
          height_tetragnwnou = $("."+class_tet_kali).outerHeight();
          apostasi_tet_apo_panw = $("."+class_tet_kali).offset().top;
          apostasti_tet_apo_aristera = $("."+class_tet_kali).offset().left;
          console.log("min="+min);
          min = apotelesma;
          
          console.log("apo="+apotelesma);
        }
      }else{
        var apotelesma = Math.abs( (parseInt(x) - $this.offset().left) );
        if ( ( apotelesma > 0 ) && ( Math.floor($this.offset().top) == Math.floor(y) ) ){
          class_tet = $(this).attr('class');
          class_tet_kali = (class_tet.split(' ')[0]);
          width_tetragwnou = $("."+class_tet_kali).outerWidth();
          height_tetragnwnou = $("."+class_tet_kali).outerHeight();
          apostasi_tet_apo_panw = $("."+class_tet_kali).offset().top;
          apostasti_tet_apo_aristera = $("."+class_tet_kali).offset().left;
          console.log("min="+min);
          min = apotelesma;
          
          console.log("apo="+apotelesma);
        }
      }
      
    });
    
    

    console.log(width_tetragwnou);
    console.log(height_tetragnwnou);
    console.log(apostasi_tet_apo_panw);
    console.log(apostasti_tet_apo_aristera);

    $(".eswteriko_kasas").removeClass("tetragwno");

    
    $( "."+class_tet_kali ).removeClass( "tetragwno" );
    
    //athrisma = Ποσα χωρισματα έχω.
    //pros = Ποσα τετραγωνα έχω.

    //pros = parseInt(athrisma) + 1;
    //athrisma = athrisma * 2;
    //pros = pros + 1 ;
    counter_tetragwnwn = counter_tetragwnwn + 1;
    athrisma = counter_tetragwnwn;
    counter_tetragwnwn = counter_tetragwnwn + 1;
    pros = counter_tetragwnwn;

    ena_tetragwno = "<canvas class="+athrisma+"></canvas>"; 
    duo_tetragwno = "<canvas class="+pros+"></canvas>";
    



    $( ".elements_nea" ).append( ena_tetragwno );
    $( ".elements_nea" ).append( duo_tetragwno );

    $("."+athrisma).addClass("tetragwno");
    $("."+pros).addClass("tetragwno");


    if (ori_kath == "1"){
      $("."+athrisma).css("position","absolute");
      $("."+athrisma).css("left",apostasti_tet_apo_aristera+"px");
      $("."+athrisma).css("top", apostasi_tet_apo_panw+"px");
      $("."+athrisma).css("width",width_tetragwnou+"px");
      $("."+athrisma).css("height",y - apostasi_tet_apo_panw +"px");
      $("."+athrisma).css("z-index","2");
      //$("."+athrisma).css("background-color","red");
      $("."+athrisma).css("border","solid");
      $("."+athrisma).css("border-width","1px");
      $("."+athrisma);
      $("."+pros).css("position","absolute");
      $("."+pros).css("left",apostasti_tet_apo_aristera+"px");
      $("."+pros).css("top", y + width_kasas+"px");
      $("."+pros).css("width",width_tetragwnou+"px");
      $("."+pros).css("height",apostasi_tet_apo_panw + height_tetragnwnou - y - width_kasas +"px");
      $("."+pros).css("z-index","2");
      //$("."+pros).css("background-color","red");
      $("."+pros).css("border","solid");
      $("."+pros).css("border-width","1px");
    }else{
      $("."+athrisma).css("position","absolute");
      $("."+athrisma).css("left",apostasti_tet_apo_aristera+"px");
      $("."+athrisma).css("top", apostasi_tet_apo_panw+"px");
      $("."+athrisma).css("width",x - apostasti_tet_apo_aristera+"px");
      $("."+athrisma).css("height",height_tetragnwnou +"px");
      $("."+athrisma).css("z-index","2");
      //$("."+athrisma).css("background-color","red");
      $("."+athrisma).css("border","solid");
      $("."+athrisma).css("border-width","1px");
      $("."+athrisma);
      $("."+pros).css("position","absolute");
      $("."+pros).css("left",width_kasas+ x+"px");
      $("."+pros).css("top", apostasi_tet_apo_panw+"px");
      $("."+pros).css("width",apostasti_tet_apo_aristera + width_tetragwnou - x - width_kasas +"px");
      $("."+pros).css("height",height_tetragnwnou +"px");
      $("."+pros).css("z-index","2");
      //$("."+pros).css("background-color","red");
      $("."+pros).css("border","solid");
      $("."+pros).css("border-width","1px");
    }

  }


  function kane_koufwmata(a, b){

    console.log($("."+a));
    console.log(b);

    var canvas_kouf = $("."+a);
    var class_canvas_kouf = canvas_kouf.attr('class');
    console.log(class_canvas_kouf);
    $(".elements_nea").append("<div class=mple_"+a+"></div>");
    $(".elements_nea").append("<div class=mple2_"+a+"></div>");

      $(".mple_"+a).css("position","absolute");
      $(".mple_"+a).css("left",$("."+class_canvas_kouf.split(' ')[0]).offset().left+"px");
      $(".mple_"+a).css("top", $("."+class_canvas_kouf.split(' ')[0]).offset().top+"px");
      $(".mple_"+a).css("width",$("."+class_canvas_kouf.split(' ')[0]).outerWidth()+"px");
      $(".mple_"+a).css("height",$("."+class_canvas_kouf.split(' ')[0]).outerHeight() +"px");
      $(".mple_"+a).css("z-index","1");
      $(".mple_"+a).css("background-color","white");
      $(".mple_"+a).css("border","solid");
      $(".mple_"+a).css("border-width","1px");

      $(".mple2_"+a).css("position","absolute");
      $(".mple2_"+a).css("left",$("."+class_canvas_kouf.split(' ')[0]).offset().left+ 12 +"px");
      $(".mple2_"+a).css("top", $("."+class_canvas_kouf.split(' ')[0]).offset().top+ 12 +"px");
      $(".mple2_"+a).css("width",$("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 24 +"px");
      $(".mple2_"+a).css("height",$("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 24 +"px");
      $(".mple2_"+a).css("z-index","1");
      $(".mple2_"+a).css("background-color","#5EAFD2");
      $(".mple2_"+a).css("border","solid");
      $(".mple2_"+a).css("border-width","1px");
      

    
 /*
    ctx.beginPath();
    ctx.fillStyle = 'white'
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,canvas_kouf.height);
    ctx.lineTo(canvas_kouf.width,canvas_kouf.height);
    ctx.lineTo(canvas_kouf.width,0);
    ctx.lineTo(0,0);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = '#5EAFD2'
    ctx.lineWidth=10;
    ctx.strokeRect(30,30,canvas_kouf.width,canvas_kouf.height);
*/

    var canvas_kouf = $("."+a)[0];
    var ctx = canvas_kouf.getContext("2d");
    ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);

    //ctx.beginPath();
    //ctx.moveTo(0,0);
    //ctx.lineTo(12,12);
    //ctx.stroke();

    //ctx.beginPath();
    //ctx.rect(0, 0, canvas_kouf.width, canvas_kouf.height);
    //ctx.fillStyle = '#5EAFD2';
    //ctx.fill();
    //ctx.lineWidth = 40;
    //ctx.strokeStyle = 'white';
    //ctx.stroke();

  }




///////// canvas /////////
  //Γενικα (δεξια, κατω, μικος, παχος)

  //Γραμμες Κάσας
  function drawKasa(olo,a,b,aristeros_typos,ar_p,ar_k,deksia_typos,de_p,de_k,panw_typos,katw_typos){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    //ctx.setTransform(1, 0, 0, 1, 0, 0);
    //ctx.scale(0.1,0.1);

    //Analogia max width = 6000. canvas width = 1000. 1000/6000 = 0.15.
    //Analogia max height = 2900. canvas height = 1000 483/2900 = 0.15.
    var max_width = 600;
    var max_height = 600;
    var min_width = 200; //1200
    var min_height = 200; //1200

    //Διαστημα = 5650
    var diastima_width = 6000 - 350;
    var analoga_width = a - 350;
    var pososto_width = analoga_width / diastima_width;
    var width  = ((600 -200) * pososto_width) + 200;

    //Διαστημα = 2700
    var diastima_height = 6000 - 350;
    var analoga_height = b - 350;
    var pososto_height = analoga_height / diastima_height;
    var height  = ((600 - 200) * pososto_height) + 200;

    
    geniki_kasa(width,height,aristeros_typos,katw_typos,deksia_typos,panw_typos,ar_p,ar_k,de_k,de_p);//1=diamperes,2=entheti,3=apli
    
  }

  function drawDiktesMegethwn(a, b, c){

    //Διαστημα = 5650
    var diastima_width = 6000 - 350;
    var analoga_width = a - 350;
    var pososto_width = analoga_width / diastima_width;
    var width  = ((600 -200) * pososto_width) + 200;

    //Διαστημα = 2700
    var diastima_height = 6000 - 350;
    var analoga_height = b - 350;
    var pososto_height = analoga_height / diastima_height;
    var height  = ((600 - 200) * pososto_height) + 200;

    $(".kath_diktis_upsous").css("position","absolute");
    $(".kath_diktis_upsous").css("left","625px");
    $(".kath_diktis_upsous").css("top", c+"px");
    $(".kath_diktis_upsous").css("z-index","+1");
    $(".kath_diktis_upsous").css("width","3px");
    $(".kath_diktis_upsous").css("height",height);
    $(".kath_diktis_upsous").css("background-color","black");

    $(".kath_diktis_upsous_text").css("position","absolute");
    $(".kath_diktis_upsous_text").css("left","550px");
    $(".kath_diktis_upsous_text").css("top", c- 35 + (height/2)+"px");
    $(".kath_diktis_upsous_text").css("padding", "3px");
    $(".kath_diktis_upsous_text").css("-ms-transform","rotate(-90deg)");
    $(".kath_diktis_upsous_text").css("-webkit-transform","rotate(-90deg)");
    $(".kath_diktis_upsous_text").css("transform", "rotate(-90deg)");
    $(".kath_diktis_upsous_text").css("font-weight", "900");
    $(".kath_diktis_upsous_text").css("letter-spacing", "2px");
    $(".kath_diktis_upsous_text").css("background-color", "rgba(255,255,255, .7)");
    $(".kath_diktis_upsous_text").css("border", "double");

    $(".kath_diktis_upsous_panw").css("position","absolute");
    $(".kath_diktis_upsous_panw").css("left","617.5px");
    $(".kath_diktis_upsous_panw").css("top", c+"px");
    $(".kath_diktis_upsous_panw").css("z-index","+1");
    $(".kath_diktis_upsous_panw").css("width","15px");
    $(".kath_diktis_upsous_panw").css("height","3px");
    $(".kath_diktis_upsous_panw").css("background-color","black");

    $(".kath_diktis_upsous_katw").css("position","absolute");
    $(".kath_diktis_upsous_katw").css("left","617.5px");
    $(".kath_diktis_upsous_katw").css("top", height+c+"px");
    $(".kath_diktis_upsous_katw").css("z-index","+1");
    $(".kath_diktis_upsous_katw").css("width","15px");
    $(".kath_diktis_upsous_katw").css("height","3px");
    $(".kath_diktis_upsous_katw").css("background-color","black");

    $(".ori_diktis_mikous").css("position","absolute");
    $(".ori_diktis_mikous").css("left","650px");
    $(".ori_diktis_mikous").css("top", c - 25 +"px");
    $(".ori_diktis_mikous").css("z-index","+1");
    $(".ori_diktis_mikous").css("width",width +"px");
    $(".ori_diktis_mikous").css("height","3px");
    $(".ori_diktis_mikous").css("background-color","black");

    $(".ori_diktis_mikous_text").css("position","absolute");
    $(".ori_diktis_mikous_text").css("left",600 + (width/2) +"px");
    $(".ori_diktis_mikous_text").css("top", c - 75 +"px");
    $(".ori_diktis_mikous_text").css("padding", "3px");
    $(".ori_diktis_mikous_text").css("font-weight", "900");
    $(".ori_diktis_mikous_text").css("letter-spacing", "2px");
    $(".ori_diktis_mikous_text").css("background-color", "rgba(255,255,255, .7)");
    $(".ori_diktis_mikous_text").css("border", "double");

    $(".ori_diktis_mikous_aristera").css("position","absolute");
    $(".ori_diktis_mikous_aristera").css("left","650px");
    $(".ori_diktis_mikous_aristera").css("top", c - 32.5 +"px");
    $(".ori_diktis_mikous_aristera").css("z-index","+1");
    $(".ori_diktis_mikous_aristera").css("width","3px");
    $(".ori_diktis_mikous_aristera").css("height","15px");
    $(".ori_diktis_mikous_aristera").css("background-color","black");

    $(".ori_diktis_mikous_deksia").css("position","absolute");
    $(".ori_diktis_mikous_deksia").css("left",650 + width + "px");
    $(".ori_diktis_mikous_deksia").css("top", c - 32.5 + "px");
    $(".ori_diktis_mikous_deksia").css("z-index","+1");
    $(".ori_diktis_mikous_deksia").css("width","3px");
    $(".ori_diktis_mikous_deksia").css("height","15px");
    $(".ori_diktis_mikous_deksia").css("background-color","black");


  }

  function allagh_diastasewn(a,b){

  }

  function drawXwrismataOri(a,b,upsos,uparxei_kath,typos_xwr,ar_kasa,ka_kasa,de_kasa,pa_kasa, apostasei_gia_katw_kasa_apo_panw, mikos, arxi, width_kasas, arithmos_ori){

    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    
    
    $( ".ori_"+arithmos_ori ).hide();
    

    
    kovete_aristera = 0;
    kovete_deksia = 0;
    //olo = 1;
    //ori = 1500;
    var diastima_width = 6000 - 350;
    var analoga_width = a - 350;
    var pososto_width = analoga_width / diastima_width;
    var width  = ((600 -200) * pososto_width) + 200;

    var diastima_height = 6000 - 350;
    var analoga_height = b - 350;
    var pososto_height = analoga_height / diastima_height;
    var height  = ((600 - 200) * pososto_height) + 200;
    

    height_zo = (upsos/b)*(height); //(height*height_xw)/b;
    width_zo = (mikos/a)*(width);
    //alert(height_zo);
   
    

    
    if( kovete_aristera == 1 ){
      ctx.fillStyle = 'white'
      ctx.beginPath();
      ctx.moveTo(ar_kasa,height_zo);
      ctx.lineTo(width_zo,height_zo);
      ctx.lineTo(width_zo, height_zo + typos_xwr);
      ctx.lineTo(ar_kasa, height_zo + typos_xwr);
      ctx.lineTo(ar_kasa,height_zo);
      ctx.fill();
      ctx.stroke();
    }else if( kovete_deksia == 1){
      ctx.fillStyle = 'white'
      ctx.beginPath();
      ctx.moveTo(width_zo,height_zo);
      ctx.lineTo(width - de_kasa,height_zo);
      ctx.lineTo(width - de_kasa, height_zo + typos_xwr);
      ctx.lineTo(width_zo, height_zo + typos_xwr);
      ctx.lineTo(width_zo,height_zo);
      ctx.fill();
      ctx.stroke();
    }else{
      //$( ".orizontio_xwrisma_1" ).css("left",parseInt(arxi) + parseInt(width_kasas)+"px");
      //$( ".orizontio_xwrisma_1" ).css("top", apostasei_gia_katw_kasa_apo_panw + height_zo);
      //$( ".orizontio_xwrisma_1" ).css("width",width_zo - width_kasas);
      //$( ".orizontio_xwrisma_1" ).css("height",typos_xwr);
      //$( ".orizontio_xwrisma_1" ).css("border","solid");
      //$( ".orizontio_xwrisma_1" ).css("border-width","1px");
      //$( ".orizontio_xwrisma_1" ).css("background-color","white");
      //$( ".orizontio_xwrisma_1" ).css("z-index","3");
      /*
      ctx.fillStyle = 'white'
      ctx.beginPath();
      ctx.moveTo(ar_kasa,height_zo);
      ctx.lineTo(width - de_kasa,height_zo);
      ctx.lineTo(width - de_kasa, height_zo + typos_xwr);
      ctx.lineTo(ar_kasa, height_zo + typos_xwr);
      ctx.lineTo(ar_kasa,height_zo);
      ctx.fill();
      ctx.stroke();
      */
    }

    if (arithmos_ori == "1"){
      $( ".orizontio_xwrisma_1" ).css("left",parseInt(arxi) + parseInt(width_kasas)+"px");
      $( ".orizontio_xwrisma_1" ).css("top", apostasei_gia_katw_kasa_apo_panw + height_zo);
      $( ".orizontio_xwrisma_1" ).css("width",width_zo - width_kasas);
      $( ".orizontio_xwrisma_1" ).css("height",typos_xwr);
      $( ".orizontio_xwrisma_1" ).css("border","solid");
      $( ".orizontio_xwrisma_1" ).css("border-width","1px");
      $( ".orizontio_xwrisma_1" ).css("background-color","white");
      $( ".orizontio_xwrisma_1" ).css("z-index","3");
    }
    if (arithmos_ori == "2"){
      $( ".orizontio_xwrisma_2" ).css("left",parseInt(arxi) + parseInt(width_kasas)+"px");
      $( ".orizontio_xwrisma_2" ).css("top", apostasei_gia_katw_kasa_apo_panw + height_zo);
      $( ".orizontio_xwrisma_2" ).css("width",width_zo - width_kasas);
      $( ".orizontio_xwrisma_2" ).css("height",typos_xwr);
      $( ".orizontio_xwrisma_2" ).css("border","solid");
      $( ".orizontio_xwrisma_2" ).css("border-width","1px");
      $( ".orizontio_xwrisma_2" ).css("background-color","white");
      $( ".orizontio_xwrisma_2" ).css("z-index","3");
    }
    if (arithmos_ori == "3"){
      $( ".orizontio_xwrisma_3" ).css("left",parseInt(arxi) + parseInt(width_kasas)+"px");
      $( ".orizontio_xwrisma_3" ).css("top", apostasei_gia_katw_kasa_apo_panw + height_zo);
      $( ".orizontio_xwrisma_3" ).css("width",width_zo - width_kasas);
      $( ".orizontio_xwrisma_3" ).css("height",typos_xwr);
      $( ".orizontio_xwrisma_3" ).css("border","solid");
      $( ".orizontio_xwrisma_3" ).css("border-width","1px");
      $( ".orizontio_xwrisma_3" ).css("background-color","white");
      $( ".orizontio_xwrisma_3" ).css("z-index","3");
    }
    if (arithmos_ori == "4"){
      $( ".orizontio_xwrisma_4" ).css("left",parseInt(arxi) + parseInt(width_kasas)+"px");
      $( ".orizontio_xwrisma_4" ).css("top", apostasei_gia_katw_kasa_apo_panw + height_zo);
      $( ".orizontio_xwrisma_4" ).css("width",width_zo - width_kasas);
      $( ".orizontio_xwrisma_4" ).css("height",typos_xwr);
      $( ".orizontio_xwrisma_4" ).css("border","solid");
      $( ".orizontio_xwrisma_4" ).css("border-width","1px");
      $( ".orizontio_xwrisma_4" ).css("background-color","white");
      $( ".orizontio_xwrisma_4" ).css("z-index","3");
    }
    if (arithmos_ori == "5"){
      $( ".orizontio_xwrisma_5" ).css("left",parseInt(arxi) + parseInt(width_kasas)+"px");
      $( ".orizontio_xwrisma_5" ).css("top", apostasei_gia_katw_kasa_apo_panw + height_zo);
      $( ".orizontio_xwrisma_5" ).css("width",width_zo - width_kasas);
      $( ".orizontio_xwrisma_5" ).css("height",typos_xwr);
      $( ".orizontio_xwrisma_5" ).css("border","solid");
      $( ".orizontio_xwrisma_5" ).css("border-width","1px");
      $( ".orizontio_xwrisma_5" ).css("background-color","white");
      $( ".orizontio_xwrisma_5" ).css("z-index","3");
    }
    if (arithmos_ori == "6"){
      $( ".orizontio_xwrisma_6" ).css("left",parseInt(arxi) + parseInt(width_kasas)+"px");
      $( ".orizontio_xwrisma_6" ).css("top", apostasei_gia_katw_kasa_apo_panw + height_zo);
      $( ".orizontio_xwrisma_6" ).css("width",width_zo - width_kasas);
      $( ".orizontio_xwrisma_6" ).css("height",typos_xwr);
      $( ".orizontio_xwrisma_6" ).css("border","solid");
      $( ".orizontio_xwrisma_6" ).css("border-width","1px");
      $( ".orizontio_xwrisma_6" ).css("background-color","white");
      $( ".orizontio_xwrisma_6" ).css("z-index","3");
    }
    


  }

  function drawXwrismataKath(a,b,mikos,uparxei_or,typos_xwr,ar_kasa,ka_kasa,de_kasa,pa_kasa, apostasi_apo_aristera, upsos, arxi, width_kasas, arithmos_kath){

    c = document.getElementById("canvas");
    ctx = c.getContext("2d");

    $( ".kath_"+arithmos_kath ).hide();

    kovete_panw = 0;
    kovete_katw = 0;
    
    var diastima_width = 6000 - 350;
    var analoga_width = a - 350;
    var pososto_width = analoga_width / diastima_width;
    var width  = ((600 -200) * pososto_width) + 200;

    var diastima_height = 6000 - 350;
    var analoga_height = b - 350;
    var pososto_height = analoga_height / diastima_height;
    var height  = ((600 - 200) * pososto_height) + 200;

    //width_zo = (width*width_xw)/a;
    //height_zo = (height*kath)/b;

    height_zo = (upsos/b)*(height); //(height*height_xw)/b;
    width_zo = (mikos/a)*(width);


    if ( kovete_panw == 1 ){
      ctx.fillStyle = 'white'
      ctx.beginPath();
      ctx.moveTo(width_zo,pa_kasa);
      ctx.lineTo(width_zo, height_zo);
      ctx.lineTo(width_zo + typos_xwr, height_zo);
      ctx.lineTo(width_zo + typos_xwr, pa_kasa);
      ctx.lineTo(width_zo,pa_kasa);
      ctx.fill();
      ctx.stroke();
    }else if( kovete_katw == 1 ){
      ctx.fillStyle = 'white'
      ctx.beginPath();
      ctx.moveTo(width_zo,height_zo);
      ctx.lineTo(width_zo, height - ka_kasa);
      ctx.lineTo(width_zo + typos_xwr, height - ka_kasa);
      ctx.lineTo(width_zo + typos_xwr, height_zo);
      ctx.lineTo(width_zo,height_zo);
      ctx.fill();
      ctx.stroke();
    }else{
      //$( ".katheto_xwrisma_1" ).css("left",apostasi_apo_aristera + width_zo - 50);
      //$( ".katheto_xwrisma_1" ).css("top",parseInt(arxi) + parseInt(width_kasas)+"px" );
      //$( ".katheto_xwrisma_1" ).css("width",typos_xwr);
      //$( ".katheto_xwrisma_1" ).css("height",height_zo - width_kasas);
      //$( ".katheto_xwrisma_1" ).css("border","solid");
      //$( ".katheto_xwrisma_1" ).css("border-width","1px");
      //$( ".katheto_xwrisma_1" ).css("background-color","white");
      //$( ".katheto_xwrisma_1" ).css("z-index","+2");
      /*
      ctx.fillStyle = 'white'
      ctx.beginPath();
      ctx.moveTo(width_zo,pa_kasa);
      ctx.lineTo(width_zo, height - ka_kasa);
      ctx.lineTo(width_zo + typos_xwr, height - ka_kasa);
      ctx.lineTo(width_zo + typos_xwr, pa_kasa);
      ctx.lineTo(width_zo,pa_kasa);
      ctx.fill();
      ctx.stroke();
      */
    }

    if ( arithmos_kath == "1"){
      $( ".katheto_xwrisma_1" ).css("left",apostasi_apo_aristera + width_zo - 50);
      $( ".katheto_xwrisma_1" ).css("top",parseInt(arxi) + parseInt(width_kasas)+"px" );
      $( ".katheto_xwrisma_1" ).css("width",typos_xwr);
      $( ".katheto_xwrisma_1" ).css("height",height_zo - width_kasas);
      $( ".katheto_xwrisma_1" ).css("border","solid");
      $( ".katheto_xwrisma_1" ).css("border-width","1px");
      $( ".katheto_xwrisma_1" ).css("background-color","white");
      $( ".katheto_xwrisma_1" ).css("z-index","+2");
    }
    if ( arithmos_kath == "2"){
      $( ".katheto_xwrisma_2" ).css("left",apostasi_apo_aristera + width_zo - 50);
      $( ".katheto_xwrisma_2" ).css("top",parseInt(arxi) + parseInt(width_kasas)+"px" );
      $( ".katheto_xwrisma_2" ).css("width",typos_xwr);
      $( ".katheto_xwrisma_2" ).css("height",height_zo - width_kasas);
      $( ".katheto_xwrisma_2" ).css("border","solid");
      $( ".katheto_xwrisma_2" ).css("border-width","1px");
      $( ".katheto_xwrisma_2" ).css("background-color","white");
      $( ".katheto_xwrisma_2" ).css("z-index","+2");
    }
    if ( arithmos_kath == "3"){
      $( ".katheto_xwrisma_3" ).css("left",apostasi_apo_aristera + width_zo - 50);
      $( ".katheto_xwrisma_3" ).css("top",parseInt(arxi) + parseInt(width_kasas)+"px" );
      $( ".katheto_xwrisma_3" ).css("width",typos_xwr);
      $( ".katheto_xwrisma_3" ).css("height",height_zo - width_kasas);
      $( ".katheto_xwrisma_3" ).css("border","solid");
      $( ".katheto_xwrisma_3" ).css("border-width","1px");
      $( ".katheto_xwrisma_3" ).css("background-color","white");
      $( ".katheto_xwrisma_3" ).css("z-index","+2");
    }
    if ( arithmos_kath == "4"){
      $( ".katheto_xwrisma_4" ).css("left",apostasi_apo_aristera + width_zo - 50);
      $( ".katheto_xwrisma_4" ).css("top",parseInt(arxi) + parseInt(width_kasas)+"px" );
      $( ".katheto_xwrisma_4" ).css("width",typos_xwr);
      $( ".katheto_xwrisma_4" ).css("height",height_zo - width_kasas);
      $( ".katheto_xwrisma_4" ).css("border","solid");
      $( ".katheto_xwrisma_4" ).css("border-width","1px");
      $( ".katheto_xwrisma_4" ).css("background-color","white");
      $( ".katheto_xwrisma_4" ).css("z-index","+2");
    }
    if ( arithmos_kath == "5"){
      $( ".katheto_xwrisma_5" ).css("left",apostasi_apo_aristera + width_zo - 50);
      $( ".katheto_xwrisma_5" ).css("top",parseInt(arxi) + parseInt(width_kasas)+"px" );
      $( ".katheto_xwrisma_5" ).css("width",typos_xwr);
      $( ".katheto_xwrisma_5" ).css("height",height_zo - width_kasas);
      $( ".katheto_xwrisma_5" ).css("border","solid");
      $( ".katheto_xwrisma_5" ).css("border-width","1px");
      $( ".katheto_xwrisma_5" ).css("background-color","white");
      $( ".katheto_xwrisma_5" ).css("z-index","+2");
    }
    if ( arithmos_kath == "6"){
      $( ".katheto_xwrisma_6" ).css("left",apostasi_apo_aristera + width_zo - 50);
      $( ".katheto_xwrisma_6" ).css("top",parseInt(arxi) + parseInt(width_kasas)+"px" );
      $( ".katheto_xwrisma_6" ).css("width",typos_xwr);
      $( ".katheto_xwrisma_6" ).css("height",height_zo - width_kasas);
      $( ".katheto_xwrisma_6" ).css("border","solid");
      $( ".katheto_xwrisma_6" ).css("border-width","1px");
      $( ".katheto_xwrisma_6" ).css("background-color","white");
      $( ".katheto_xwrisma_6" ).css("z-index","+2");
    }
    
    

    //alert(width);
    //alert(height);
    //alert(width);
  
    


  }

  function geniki_kasa(width,height,width_kasa_aristera,width_kasa_katw,width_kasa_deksia,width_kasa_panw,ar_p,ar_k,de_k,de_p){

      ctx.fillStyle = 'white'
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(0,height);
      ctx.lineTo(width,height);
      ctx.lineTo(width,0);
      ctx.lineTo(0,0);
      ctx.fill();
      ctx.stroke();

    //Diagonia panw aristera
    if(ar_p == 1){
      ctx.beginPath();
      ctx.moveTo(width_kasa_aristera,width_kasa_panw);
      ctx.lineTo(width_kasa_aristera,0);
      ctx.stroke();
    }else if(ar_p == 2){
      ctx.beginPath();
      ctx.moveTo(width_kasa_aristera,width_kasa_panw);
      ctx.lineTo(0,width_kasa_panw);
      ctx.stroke();
    }else{
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(width_kasa_aristera,width_kasa_panw);
      ctx.stroke();
    }
    //Diagonia katw aristera
    if(ar_k == 1){
      ctx.beginPath();
      ctx.moveTo(width_kasa_aristera,height- width_kasa_katw);
      ctx.lineTo(width_kasa_aristera,height);
      ctx.stroke();
    }else if(ar_k == 2){
      ctx.beginPath();
      ctx.moveTo(width_kasa_aristera,height- width_kasa_katw);
      ctx.lineTo(0,height- width_kasa_katw);
      ctx.stroke();
    }else{
      ctx.beginPath();
      ctx.moveTo(0,height);
      ctx.lineTo(width_kasa_aristera,height - width_kasa_katw);
      ctx.stroke();
    }
    //Diagonia katw deksia
    if(de_k == 1){
      ctx.beginPath();
      ctx.moveTo(width - width_kasa_deksia,height - width_kasa_katw);
      ctx.lineTo(width - width_kasa_deksia,height);
      ctx.stroke();
    }else if(de_k == 2){
      ctx.beginPath();
      ctx.moveTo(width - width_kasa_deksia,height - width_kasa_katw);
      ctx.lineTo(width,height - width_kasa_katw);
      ctx.stroke();
    }else{
      ctx.beginPath();
      ctx.moveTo(width,height);
      ctx.lineTo(width - width_kasa_deksia,height - width_kasa_katw);
      ctx.stroke();
    }
    //Diagonia panw deksia
    if(de_p == 1){
      ctx.beginPath();
      ctx.moveTo(width - width_kasa_deksia,width_kasa_panw);
      ctx.lineTo(width - width_kasa_deksia,0);
      ctx.stroke();
    }else if(de_p == 2){
      ctx.beginPath();
      ctx.moveTo(width - width_kasa_deksia,width_kasa_panw);
      ctx.lineTo(width,width_kasa_katw);
      ctx.stroke();
    }else{
      ctx.beginPath();
      ctx.moveTo(width,0);
      ctx.lineTo(width - width_kasa_deksia,width_kasa_panw);
      ctx.stroke();
    }

  }




  /////////////////////////   ΜΟΝΟΦΥΛΛΑΑΑΑΑ  //////////////////////////////

  ////// ΟΛΑ ΤΑ ΜΟΝΟΦΥΛΛΑ ΧΩΡΙΣ ΓΕΓΓΙΤΗ ΜΕ ΧΟΝΤΡΗ ΚΑΣΑ /////////
  function drawCanvasMonXwrFeg(olo,a,b){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(a,b);
    //ctx.scale(2,1);
    ctx.fillStyle = olo; //Geniko xrwma
    /*
    ctx.fillRect(15, 0, 74, 15);//panw
    ctx.fillRect(15, 89, 74, 15);//katw
    ctx.fillRect(0, 0, 15, 104);//arist
    ctx.fillRect(89, 0, 15, 104);//deks
    */
    ctx.fillRect(30,30,img.width,img.height);
    ctx.fillStyle = "#5EAFD2"; //μπλε
    ctx.fillRect(45, 45, img.width - 28, img.height - 28);
    ctx.drawImage(img, 30, 30);
    //c.setAttribute('width', '475');
    //c.setAttribute('height', '475');
  }
   
  ////// ΟΛΑ ΤΑ ΜΟΝΟΦΥΛΛΑ ΧΩΡΙΣ ΓΕΓΓΙΤΗ ΜΕ ΛΕΠΤΗ ΚΑΣΑ /////////
  function drawCanvasMonXwrFegMikro(olo,a,b){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(a,b);
    //ctx.scale(2,1);
    ctx.fillStyle = olo; //Geniko xrwma
    /*
    ctx.fillRect(15, 0, 74, 15);//panw
    ctx.fillRect(15, 89, 74, 15);//katw
    ctx.fillRect(0, 0, 15, 104);//arist
    ctx.fillRect(89, 0, 15, 104);//deks
    */
    ctx.fillRect(30,30,img.width,img.height);
    ctx.fillStyle = "#5EAFD2"; //μπλε
    ctx.fillRect(35, 35, img.width - 10, img.height - 10);
    ctx.drawImage(img, 30, 30);
    //c.setAttribute('width', '475');
    //c.setAttribute('height', '475');
  }

  function PortaMonMeFegMikro(olo,a,b){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(a,b);
    //ctx.scale(2,1);
    ctx.fillStyle = olo; //Geniko xrwma
    /*
    ctx.fillRect(15, 0, 74, 15);//panw
    ctx.fillRect(15, 89, 74, 15);//katw
    ctx.fillRect(0, 0, 15, 104);//arist
    ctx.fillRect(89, 0, 15, 104);//deks
    */
    // +20 = 50
    ctx.fillRect(30,30,img.width,img.height);
    ctx.fillStyle = "#5EAFD2"; //μπλε
    //45 + 20feg + 15 kouf = 65
    //20 + 14 + 14 = 48
    ctx.fillRect(45, 65, img.width - 28, img.height - 48);
    //Feggitis
    ctx.fillRect(35, 35,img.width - 10, img.height - 86);
    ctx.drawImage(img, 30, 30);
    //c.setAttribute('width', '475');
    //c.setAttribute('height', '475');
  }

  function PortaMonMeFegMegalo(olo,a,b){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(a,b);
    //ctx.scale(2,1);
    ctx.fillStyle = olo; //Geniko xrwma
    /*
    ctx.fillRect(15, 0, 74, 15);//panw
    ctx.fillRect(15, 89, 74, 15);//katw
    ctx.fillRect(0, 0, 15, 104);//arist
    ctx.fillRect(89, 0, 15, 104);//deks
    */
    // +20 = 50
    ctx.fillRect(30,30,img.width,img.height);
    ctx.fillStyle = "#5EAFD2"; //μπλε
    //45 + 20feg + 15 kouf = 65
    //25 + 14 + 14 = 48
    ctx.fillRect(45, 65, img.width - 28, img.height - 51);
    //Feggitis
    ctx.fillRect(40, 40,img.width - 18, img.height - 93);
    ctx.drawImage(img, 30, 30);
    //c.setAttribute('width', '475');
    //c.setAttribute('height', '475');
  }

  function MpalkonoportaMonFegMegalo(olo,a,b){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(a,b);
    //ctx.scale(2,1);
    ctx.fillStyle = olo; //Geniko xrwma
    /*
    ctx.fillRect(15, 0, 74, 15);//panw
    ctx.fillRect(15, 89, 74, 15);//katw
    ctx.fillRect(0, 0, 15, 104);//arist
    ctx.fillRect(89, 0, 15, 104);//deks
    */
    // +20 = 50
    ctx.fillRect(30,30,img.width,img.height);
    ctx.fillStyle = "#5EAFD2"; //μπλε
    //45 + 20feg + 15 kouf = 65
    //25 + 14 + 14 = 48
    ctx.fillRect(45, 85, img.width - 28, img.height - 68);
    //Feggitis
    ctx.fillRect(40, 40,img.width - 18, img.height - 145);
    ctx.drawImage(img, 30, 30);
    //c.setAttribute('width', '475');
    //c.setAttribute('height', '475');

  }

  /////////////// ΔΥΦΥΛΛΑ /////////////////////////////////////

  //// ΟΛΑ ΤΑ ΔΥΦΥΛΛΑ ΧΩΡΙΣ ΦΕΓΙΤΗ ΜΕ ΧΟΝΤΡΗ ΚΑΣΑ //////////
  function drawCanvasDifXwrFeg(olo,a,b){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(a,b);
    //ctx.scale(2,1);
    ctx.fillStyle = olo; //Geniko xrwma
    /*
    ctx.fillRect(15, 0, 74, 15);//panw
    ctx.fillRect(15, 89, 74, 15);//katw
    ctx.fillRect(0, 0, 15, 104);//arist
    ctx.fillRect(89, 0, 15, 104);//deks
    */
    ctx.fillRect(30,30,img.width,img.height);
    ctx.fillStyle = "#5EAFD2"; //μπλε
    //ΠΡΩΤΟ 28 = 14 + 14 πλευρες
    ctx.fillRect(45, 45, (img.width/2) - 28, img.height - 28);
    //ΔΕΥΤΕΡΟ 13 δεν ξερω γιατι η πλευρα
    ctx.fillRect(30 + (img.width/2) + 13,45, (img.width/2) - 28, img.height - 28);
    ctx.drawImage(img, 30, 30);
    //c.setAttribute('width', '475');
    //c.setAttribute('height', '475');
  }

  ////// ΟΛΑ ΤΑ ΔΥΦΥΛΛΑ ΧΩΡΙΣ ΓΕΓΓΙΤΗ ΜΕ ΛΕΠΤΗ ΚΑΣΑ /////////
  function drawCanvasDifXwrFegMikro(olo,a,b){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(a,b);
    //ctx.scale(2,1);
    ctx.fillStyle = olo; //Geniko xrwma
    /*
    ctx.fillRect(15, 0, 74, 15);//panw
    ctx.fillRect(15, 89, 74, 15);//katw
    ctx.fillRect(0, 0, 15, 104);//arist
    ctx.fillRect(89, 0, 15, 104);//deks
    */
    ctx.fillRect(30,30,img.width,img.height);
    ctx.fillStyle = "#5EAFD2"; //μπλε
    //ΠΡΩΤΟ 10 = 5 + 5 πλευρες
    ctx.fillRect(35, 35, (img.width/2) - 10, img.height - 10);
    //ΔΕΥΤΕΡΟ 13 δεν ξερω γιατι η πλευρα
    ctx.fillRect(30 + (img.width/2) + 5,35, (img.width/2) - 10, img.height - 10);
    ctx.drawImage(img, 30, 30);
    //c.setAttribute('width', '475');
    //c.setAttribute('height', '475');
  }

  function DifDeksiaMikroXwrFeg(olo,a,b){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(a,b);
    //ctx.scale(2,1);
    ctx.fillStyle = olo; //Geniko xrwma
    /*
    ctx.fillRect(15, 0, 74, 15);//panw
    ctx.fillRect(15, 89, 74, 15);//katw
    ctx.fillRect(0, 0, 15, 104);//arist
    ctx.fillRect(89, 0, 15, 104);//deks
    */
    ctx.fillRect(30,30,img.width,img.height);
    ctx.fillStyle = "#5EAFD2"; //μπλε
    //ΠΡΩΤΟ 10 = 5 + 5 πλευρες
    ctx.fillRect(45, 45, (img.width/2) - 28, img.height - 28);
    //ΔΕΥΤΕΡΟ 13 δεν ξερω γιατι η πλευρα
    ctx.fillRect(30 + (img.width/2) + 5,35, (img.width/2) - 10, img.height - 10);
    ctx.drawImage(img, 30, 30);
    //c.setAttribute('width', '475');
    //c.setAttribute('height', '475');
  }

  function DifAristeraMikroXwrFeg(olo,a,b){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(a,b);
    //ctx.scale(2,1);
    ctx.fillStyle = olo; //Geniko xrwma
    /*
    ctx.fillRect(15, 0, 74, 15);//panw
    ctx.fillRect(15, 89, 74, 15);//katw
    ctx.fillRect(0, 0, 15, 104);//arist
    ctx.fillRect(89, 0, 15, 104);//deks
    */
    ctx.fillRect(30,30,img.width,img.height);
    ctx.fillStyle = "#5EAFD2"; //μπλε
    //ΠΡΩΤΟ 10 = 5 + 5 πλευρες
    //ctx.fillRect(45, 45, (img.width/2) - 28, img.height - 28);
    ctx.fillRect(35, 35, (img.width/2) - 10, img.height - 10);
    //ΔΕΥΤΕΡΟ 13 δεν ξερω γιατι η πλευρα
    ctx.fillRect(30 + (img.width/2) + 13,45, (img.width/2) - 28, img.height - 28);
    ctx.drawImage(img, 30, 30);
    //c.setAttribute('width', '475');
    //c.setAttribute('height', '475');
  }

  function PortaDifFegMikro(olo,a,b){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(a,b);
    //ctx.scale(2,1);
    ctx.fillStyle = olo; //Geniko xrwma
    /*
    ctx.fillRect(15, 0, 74, 15);//panw
    ctx.fillRect(15, 89, 74, 15);//katw
    ctx.fillRect(0, 0, 15, 104);//arist
    ctx.fillRect(89, 0, 15, 104);//deks
    */
    ctx.fillRect(30,30,img.width,img.height);
    ctx.fillStyle = "#5EAFD2"; //μπλε
    // αριστερα
    ctx.fillRect(45, 144, (img.width/2) - 28, (img.height/2) - 28);
    // δεξια
    ctx.fillRect(30 + (img.width/2) + 13,144, (img.width/2) - 28, (img.height/2) - 28);
    // επανω
    ctx.fillRect(35, 35, img.width - 10, (img.height/2) - 10);
    ctx.drawImage(img, 30, 30);
    //c.setAttribute('width', '475');
    //c.setAttribute('height', '475');
  }

  function PortaDifFegMiaPorta(olo,a,b){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(a,b);
    //ctx.scale(2,1);
    ctx.fillStyle = olo; //Geniko xrwma
    /*
    ctx.fillRect(15, 0, 74, 15);//panw
    ctx.fillRect(15, 89, 74, 15);//katw
    ctx.fillRect(0, 0, 15, 104);//arist
    ctx.fillRect(89, 0, 15, 104);//deks
    */
    ctx.fillRect(30,30,img.width,img.height);
    ctx.fillStyle = "#5EAFD2"; //μπλε
    // αριστερα
    ctx.fillRect(45, 144, (img.width/2) - 28, (img.height/2) - 28);
    // δεξια
    ctx.fillRect(30 + (img.width/2) + 13,144, (img.width/2) - 28, (img.height/2) - 28);
    // επανω
    ctx.fillRect(45, 45, img.width - 28, (img.height/2) - 28);
    ctx.drawImage(img, 30, 30);
    //c.setAttribute('width', '475');
    //c.setAttribute('height', '475');
  }

  function PortaDifFegDuoPortes(olo,a,b){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(a,b);
    //ctx.scale(2,1);
    ctx.fillStyle = olo; //Geniko xrwma
    /*
    ctx.fillRect(15, 0, 74, 15);//panw
    ctx.fillRect(15, 89, 74, 15);//katw
    ctx.fillRect(0, 0, 15, 104);//arist
    ctx.fillRect(89, 0, 15, 104);//deks
    */
    ctx.fillRect(30,30,img.width,img.height);
    ctx.fillStyle = "#5EAFD2"; //μπλε
    // αριστερα
    ctx.fillRect(45, 144, (img.width/2) - 28, (img.height/2) - 28);
    // δεξια
    ctx.fillRect(30 + (img.width/2) + 13,144, (img.width/2) - 28, (img.height/2) - 28);
    // επανω αριστερα
    ctx.fillRect(45, 45, (img.width/2) - 28, (img.height/2) - 28);
    //επανω δεξια
    ctx.fillRect(30 + (img.width/2) + 14, 45, (img.width/2) - 28, (img.height/2) - 28);
    ctx.drawImage(img, 30, 30);
    //c.setAttribute('width', '475');
    //c.setAttribute('height', '475');
  }

  ////////////////// ΤΡΙΦΥΛΛΑ ///////////////////////////////

  ///// ΟΛΑ ΤΑ ΤΡΙΦΥΛΛΑ ΧΩΡΙΣ ΓΕΦΦΙΤΗ ΜΕ ΧΟΝΤΡΗ ΚΑΣΑ /////
  function drawCanvasTriXwrFeg(olo,a,b){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(a,b);
    //ctx.scale(2,1);
    ctx.fillStyle = olo; //Geniko xrwma
    /*
    ctx.fillRect(15, 0, 74, 15);//panw
    ctx.fillRect(15, 89, 74, 15);//katw
    ctx.fillRect(0, 0, 15, 104);//arist
    ctx.fillRect(89, 0, 15, 104);//deks
    */
    ctx.fillRect(30,30,img.width,img.height);
    ctx.fillStyle = "#5EAFD2"; //μπλε
    //ΠΡΩΤΟ 28 = 14 + 14 πλευρες
    ctx.fillRect(45, 45, (img.width/3) - 28, img.height - 28);
    //ΔΕΥΤΕΡΟ 13 δεν ξερω γιατι η πλευρα
    ctx.fillRect(30 + (img.width/3) + 13,45, (img.width/3) - 28, img.height - 28);
    //ΤΡΙΤΟ 
    ctx.fillRect(30 + 2*(img.width/3) + 13,45, (img.width/3) - 28, img.height - 28);
    ctx.drawImage(img, 30, 30);
    //c.setAttribute('width', '475');
    //c.setAttribute('height', '475');
  }

  function ParathiroTriDeksiaAristeraMikro(olo,a,b){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(a,b);
    //ctx.scale(2,1);
    ctx.fillStyle = olo; //Geniko xrwma
    /*
    ctx.fillRect(15, 0, 74, 15);//panw
    ctx.fillRect(15, 89, 74, 15);//katw
    ctx.fillRect(0, 0, 15, 104);//arist
    ctx.fillRect(89, 0, 15, 104);//deks
    */
    ctx.fillRect(30,30,img.width,img.height);
    ctx.fillStyle = "#5EAFD2"; //μπλε
    //ΠΡΩΤΟ 28 = 14 + 14 πλευρες
    ctx.fillRect(45, 45, (img.width/3) - 28, img.height - 28);
    //ΔΕΥΤΕΡΟ 13 δεν ξερω γιατι η πλευρα
    ctx.fillRect(30 + (img.width/3) + 4,35, (img.width/3) - 8, img.height - 8)
    //ΤΡΙΤΟ 
    ctx.fillRect(30 + 2*(img.width/3) + 13,45, (img.width/3) - 28, img.height - 28)
    ctx.drawImage(img, 30, 30);
    //c.setAttribute('width', '475');
    //c.setAttribute('height', '475');
  }

  function ParathiroTriDeksiaAristeraMikro2(olo,a,b){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(a,b);
    //ctx.scale(2,1);
    ctx.fillStyle = olo; //Geniko xrwma
    /*
    ctx.fillRect(15, 0, 74, 15);//panw
    ctx.fillRect(15, 89, 74, 15);//katw
    ctx.fillRect(0, 0, 15, 104);//arist
    ctx.fillRect(89, 0, 15, 104);//deks
    */
    ctx.fillRect(30,30,img.width,img.height);
    ctx.fillStyle = "#5EAFD2"; //μπλε
    //ΠΡΩΤΟ 28 = 14 + 14 πλευρες
    ctx.fillRect(35, 35, (img.width/3) - 7, img.height - 8);
    //ΔΕΥΤΕΡΟ 13 δεν ξερω γιατι η πλευρα
    ctx.fillRect(45 + (img.width/3),45, (img.width/3) - 28, img.height - 28)
    //ΤΡΙΤΟ 
    ctx.fillRect(32 + 2*(img.width/3),35, (img.width/3) - 7, img.height - 8)
    ctx.drawImage(img, 30, 30);
    //c.setAttribute('width', '475');
    //c.setAttribute('height', '475');
  }

  function MpalkonoportaTriDeksiaMikro(olo,a,b){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(a,b);
    //ctx.scale(2,1);
    ctx.fillStyle = olo; //Geniko xrwma
    /*
    ctx.fillRect(15, 0, 74, 15);//panw
    ctx.fillRect(15, 89, 74, 15);//katw
    ctx.fillRect(0, 0, 15, 104);//arist
    ctx.fillRect(89, 0, 15, 104);//deks
    */
    ctx.fillRect(30,30,img.width,img.height);
    ctx.fillStyle = "#5EAFD2"; //μπλε
    //ΠΡΩΤΟ 28 = 14 + 14 πλευρες
    ctx.fillRect(45, 45, (img.width/3) - 28, img.height - 28);
    //ΔΕΥΤΕΡΟ 13 δεν ξερω γιατι η πλευρα
    ctx.fillRect(30 + (img.width/3) + 13,45, (img.width/3) - 28, img.height - 28);
    //ΤΡΙΤΟ 
    ctx.fillRect(30 + 2*(img.width/3) + 4,35, (img.width/3) - 8, img.height - 8);
    ctx.drawImage(img, 30, 30);
    //c.setAttribute('width', '475');
    //c.setAttribute('height', '475');
  }

  function MpalkonoportaTriAristeraMikro(olo,a,b){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(a,b);
    //ctx.scale(2,1);
    ctx.fillStyle = olo; //Geniko xrwma
    /*
    ctx.fillRect(15, 0, 74, 15);//panw
    ctx.fillRect(15, 89, 74, 15);//katw
    ctx.fillRect(0, 0, 15, 104);//arist
    ctx.fillRect(89, 0, 15, 104);//deks
    */
    ctx.fillRect(30,30,img.width,img.height);
    ctx.fillStyle = "#5EAFD2"; //μπλε
    //ΠΡΩΤΟ 28 = 14 + 14 πλευρες
    ctx.fillRect(35, 35, (img.width/3) - 8, img.height - 8);
    //ΔΕΥΤΕΡΟ 13 δεν ξερω γιατι η πλευρα
    ctx.fillRect(30 + (img.width/3) + 13,45, (img.width/3) - 28, img.height - 28);
    //ΤΡΙΤΟ 
    ctx.fillRect(30 + 2*(img.width/3) + 13,45, (img.width/3) - 28, img.height - 28);
    ctx.drawImage(img, 30, 30);
    //c.setAttribute('width', '475');
    //c.setAttribute('height', '475');
  }

  /////////// EXTRAAA /////////////////////

  function EksoterikaMon(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.save();
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = color;
    ctx.fillRect(30, 30, 104, 15);
    ctx.fillStyle = "#000000";
    ctx.fillRect(30, 45, img.width, 1);
    ctx.fillRect(30, 30, img.width, 1);
    ctx.fillRect(30, 30, 1, 15);
    ctx.fillRect(29+img.width, 30, 1, 15);
    ctx.restore();
  }

  function EpikathimenaMon(color,a,b){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(30, 20, 104, 10);
    //ctx.globalAlpha = 0.5;
    ctx.fillStyle = "#000000";
    ctx.fillRect(30, 20, 104, 3);
    ctx.fillRect(30, 20, 3, 10);
    ctx.fillRect(132, 20, 3, 10);

    img = document.getElementById("canvas_image");
    //Καθετη
    /*
    ctx.beginPath();
    ctx.moveTo(10,20);
    ctx.lineTo(10,30 + img.height);
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(b,10,30 + (img.height/2));
    */
    //Οριζόντια
    /*
    ctx.beginPath();
    ctx.moveTo(30,10);
    ctx.lineTo(30 + img.width,10);
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.textAlign = "center";
    ctx.fillText(a,30 + (img.width/2),10);
    */
    //ctx.globalAlpha = 0.5;
    //ctx.fillStyle = "#000000";
    //ctx.fillRect(30, 20, 104, 3);
    //ctx.fillRect(30, 20, 3, 10);
    //ctx.fillRect(132, 20, 3, 10);
  }

  function EpikathimenaMonPro(color,a,b){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(30, 16, 104, 10);
    //ctx.globalAlpha = 0.5;
    ctx.fillStyle = "#000000";
    ctx.fillRect(30, 16, 104, 3);
    ctx.fillRect(30, 16, 3, 10);
    ctx.fillRect(132, 16, 3, 10);
    //ctx.globalAlpha = 0.5;
    //ctx.fillStyle = "#000000";
    //ctx.fillRect(30, 20, 104, 3);
    //ctx.fillRect(30, 20, 3, 10);
    //ctx.fillRect(132, 20, 3, 10);
  }

  function PersidesMon(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = color; 
    ctx.fillRect(30, 50, 104, 3);
    ctx.fillRect(30, 55, 104, 3);
    ctx.fillRect(30, 60, 104, 3);
    ctx.fillRect(30, 65, 104, 3);
  }


  function EksoterikaDif(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.save();
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = color;
    ctx.fillRect(30, 30, 204, 15);
    ctx.fillStyle = "#000000";
    ctx.fillRect(30, 45, img.width, 1);
    ctx.fillRect(30, 30, img.width, 1);
    ctx.fillRect(30, 30, 1, 15);
    ctx.fillRect(29+img.width, 30, 1, 15);
    ctx.restore();
  }

  function EpikathimenaDif(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(30, 20, 204, 10);
    //ctx.globalAlpha = 0.5;
    ctx.fillStyle = "#000000";
    ctx.fillRect(30, 20, 204, 3);
    ctx.fillRect(30, 20, 3, 10);
    ctx.fillRect(232, 20, 3, 10);

    //ctx.globalAlpha = 0.5;
    //ctx.fillStyle = "#000000";
    //ctx.fillRect(30, 20, 104, 3);
    //ctx.fillRect(30, 20, 3, 10);
    //ctx.fillRect(132, 20, 3, 10);
  }

  function EpikathimenaDifPro(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(30, 16, 204, 10);
    //ctx.globalAlpha = 0.5;
    ctx.fillStyle = "#000000";
    ctx.fillRect(30, 16, 204, 3);
    ctx.fillRect(30, 16, 3, 10);
    ctx.fillRect(232, 16, 3, 10);

    //ctx.globalAlpha = 0.5;
    //ctx.fillStyle = "#000000";
    //ctx.fillRect(30, 20, 104, 3);
    //ctx.fillRect(30, 20, 3, 10);
    //ctx.fillRect(132, 20, 3, 10);
  }

  function PersidesDif(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = color; 
    ctx.fillRect(30, 50, 204, 3);
    ctx.fillRect(30, 55, 204, 3);
    ctx.fillRect(30, 60, 204, 3);
    ctx.fillRect(30, 65, 204, 3);
  }

  function EksoterikaTrif(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.save();
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = color;
    ctx.fillRect(30, 30, 304, 15);
    ctx.fillStyle = "#000000";
    ctx.fillRect(30, 45, img.width, 1);
    ctx.fillRect(30, 30, img.width, 1);
    ctx.fillRect(30, 30, 1, 15);
    ctx.fillRect(29+img.width, 30, 1, 15);
    ctx.restore();
  }

  function EpikathimenaTrif(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(30, 20, 304, 10);
    //ctx.globalAlpha = 0.5;
    ctx.fillStyle = "#000000";
    ctx.fillRect(30, 20, 304, 3);
    ctx.fillRect(30, 20, 3, 10);
    ctx.fillRect(332, 20, 3, 10);

    //ctx.globalAlpha = 0.5;
    //ctx.fillStyle = "#000000";
    //ctx.fillRect(30, 20, 104, 3);
    //ctx.fillRect(30, 20, 3, 10);
    //ctx.fillRect(132, 20, 3, 10);
  }

  function EpikathimenaTrifPro(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(30, 16, 304, 10);
    //ctx.globalAlpha = 0.5;
    ctx.fillStyle = "#000000";
    ctx.fillRect(30, 16, 304, 3);
    ctx.fillRect(30, 16, 3, 10);
    ctx.fillRect(332, 16, 3, 10);

    //ctx.globalAlpha = 0.5;
    //ctx.fillStyle = "#000000";
    //ctx.fillRect(30, 20, 104, 3);
    //ctx.fillRect(30, 20, 3, 10);
    //ctx.fillRect(132, 20, 3, 10);
  }

  function PersidesTrif(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = color; 
    ctx.fillRect(30, 50, 304, 3);
    ctx.fillRect(30, 55, 304, 3);
    ctx.fillRect(30, 60, 304, 3);
    ctx.fillRect(30, 65, 304, 3);
  }

  /////////profilssssss /////////

  function ProfilKatwMikro(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.fillStyle = color; 
    ctx.fillRect(30,30+img.height,img.width,4);

    ctx.fillStyle = "#000000";
    //panw
    ctx.fillRect(30, 30+img.height, img.width, 1);
    //katw
    ctx.fillRect(30, 30+img.height+4, img.width, 1);
    //aristera
    ctx.fillRect(30, 30+img.height, 1, 4);
    //deksia
    ctx.fillRect(30+img.width,30+img.height, 1, 4);
  }

  function ProfilKatwMegalo(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.fillStyle = color; 
    //26 = 30 - 4 gia deksia
    ctx.fillRect(26,30+img.height,img.width+8,4);

    ctx.fillStyle = "#000000";
    //panw
    ctx.fillRect(26, 30+img.height, img.width+8, 1);
    //katw
    ctx.fillRect(26, 30+img.height+4, img.width+8, 1);
    //aristera
    ctx.fillRect(26, 30+img.height, 1, 4);
    //deksia
    ctx.fillRect(26+img.width+8,30+img.height, 1, 4);
  }

  function ProfilKatwMegaloDe(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.fillStyle = color; 
    //26 = 30 - 4 gia deksia
    ctx.fillRect(30,30+img.height,img.width+4,4);

    ctx.fillStyle = "#000000";
    //panw
    ctx.fillRect(30, 30+img.height, img.width+4, 1);
    //katw
    ctx.fillRect(30, 30+img.height+4, img.width+4, 1);
    //aristera
    ctx.fillRect(30, 30+img.height, 1, 4);
    //deksia
    ctx.fillRect(26+img.width+8,30+img.height, 1, 4);
  }

  function ProfilKatwMegaloAr(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.fillStyle = color; 
    //26 = 30 - 4 gia deksia
    ctx.fillRect(26,30+img.height,img.width+4,4);

    ctx.fillStyle = "#000000";
    //panw
    ctx.fillRect(26, 30+img.height, img.width+4, 1);
    //katw
    ctx.fillRect(26, 30+img.height+4, img.width+4, 1);
    //aristera
    ctx.fillRect(26, 30+img.height, 1, 4);
    //deksia
    ctx.fillRect(30+img.width,30+img.height, 1, 4);
  }

  function ProfilPanwMikro(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.fillStyle = color; 
    ctx.fillRect(30,26,img.width,4);

    ctx.fillStyle = "#000000";
    //panw
    ctx.fillRect(30, 26, img.width, 1);
    //katw
    ctx.fillRect(30, 26+4, img.width, 1);
    //aristera
    ctx.fillRect(30, 26, 1, 4);
    //deksia
    ctx.fillRect(30+img.width,26, 1, 4);
  }

  function ProfilPanwMegalo(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.fillStyle = color; 
    ctx.fillRect(26,26,img.width+8,4);

    ctx.fillStyle = "#000000";
    //panw
    ctx.fillRect(26, 26, img.width+8, 1);
    //katw
    ctx.fillRect(26, 26+3, img.width+8, 1);
    //aristera
    ctx.fillRect(26, 26, 1, 4);
    //deksia
    ctx.fillRect(26+img.width+8,26, 1, 4);
  }

  function ProfilPanwMegaloDe(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.fillStyle = color; 
    ctx.fillRect(30,26,img.width+4,4);

    ctx.fillStyle = "#000000";
    //panw
    ctx.fillRect(30, 26, img.width+4, 1);
    //katw
    ctx.fillRect(30, 26+3, img.width+4, 1);
    //aristera
    ctx.fillRect(30, 26, 1, 4);
    //deksia
    ctx.fillRect(26+img.width+8,26, 1, 4);
  }

  function ProfilPanwMegaloAr(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.fillStyle = color; 
    ctx.fillRect(26,26,img.width+4,4);

    ctx.fillStyle = "#000000";
    //panw
    ctx.fillRect(26, 26, img.width+4, 1);
    //katw
    ctx.fillRect(26, 26+3, img.width+4, 1);
    //aristera
    ctx.fillRect(26, 26, 1, 4);
    //deksia
    ctx.fillRect(30+img.width,26, 1, 4);
  }

  function ProfilDeksiaMikro(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.fillStyle = color; 
    ctx.fillRect(30+img.width,30,4,img.height);

    ctx.fillStyle = "#000000";
    //panw
    ctx.fillRect(30+img.width, 30, 4, 1);
    //katw
    ctx.fillRect(30+img.width, 29+img.height, 4, 1);
    //aristera
    ctx.fillRect(30+img.width, 30, 1, img.height);
    //deksia
    ctx.fillRect(30+img.width+4,30, 1, img.height);
  }

  function ProfilDeksiaMegalo1(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.fillStyle = color; 
    ctx.fillRect(30+img.width,20,4,img.height+10);

    ctx.fillStyle = "#000000";
    //panw
    ctx.fillRect(30+img.width, 20, 4, 1);
    //katw
    ctx.fillRect(30+img.width, 29+img.height, 4, 1);
    //aristera
    ctx.fillRect(30+img.width, 20, 1, img.height+10);
    //deksia
    ctx.fillRect(30+img.width+4,20, 1, img.height+10);
  }

  function ProfilDeksiaMegalo2(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.fillStyle = color; 
    ctx.fillRect(30+img.width,16,4,img.height+14);

    ctx.fillStyle = "#000000";
    //panw
    ctx.fillRect(30+img.width, 16, 4, 1);
    //katw
    ctx.fillRect(30+img.width, 29+img.height, 4, 1);
    //aristera
    ctx.fillRect(30+img.width, 16, 1, img.height+14);
    //deksia
    ctx.fillRect(30+img.width+4,16, 1, img.height+14);
  }

  function ProfilAristeraMikro(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.fillStyle = color; 
    ctx.fillRect(26,30,4,img.height);

    ctx.fillStyle = "#000000";
    //panw
    ctx.fillRect(26, 30, 4, 1);
    //katw
    ctx.fillRect(26, 29+img.height, 4, 1);
    //aristera
    ctx.fillRect(26, 30, 1, img.height);
    //deksia
    ctx.fillRect(30,30, 1, img.height);
  }

  function ProfilAristeraMegalo1(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.fillStyle = color; 
    ctx.fillRect(26,20,4,img.height+10);

    ctx.fillStyle = "#000000";
    //panw
    ctx.fillRect(26, 20, 4, 1);
    //katw
    ctx.fillRect(26, 29+img.height, 4, 1);
    //aristera
    ctx.fillRect(26, 20, 1, img.height+10);
    //deksia
    ctx.fillRect(30,20, 1, img.height+10);
  }

  function ProfilAristeraMegalo2(color){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.fillStyle = color; 
    ctx.fillRect(26,16,4,img.height+14);

    ctx.fillStyle = "#000000";
    //panw
    ctx.fillRect(26, 16, 4, 1);
    //katw
    ctx.fillRect(26, 29+img.height, 4, 1);
    //aristera
    ctx.fillRect(26, 16, 1, img.height+14);
    //deksia
    ctx.fillRect(30,16, 1, img.height+14);
  }

  ////////// SAVE CANVAS IMG ///////////////////

  function ArxiTable(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    save = ctx.getImageData(0,0,c.width,c.height);
    for (var i=0;i<64;i++){ //64 διαφορετικες οικονες
      IMAGE[i] = save;
    }
  }

  function SaveImg(a){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    save = ctx.getImageData(0,0,c.width,c.height);
    var digit = parseInt(a, 2);
    IMAGE[digit] = save;
    //ctx.putImageData(save,0,0);
  }

  function DisplayImg(b){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var digit = parseInt(b, 2);
    img = IMAGE[digit];
    ctx.putImageData(img,0,0);
  }

  function save2(digit){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    save = ctx.getImageData(0,0,c.width,c.height);
    IMAGE[digit] = save;
  }

  function display2(digit){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = IMAGE[digit];
    ctx.putImageData(img,0,0);
  }


  ////////////// GRAMMESSSSS /////////////////
 
  function ypsos_a(a){
    ypsos = a;
  }

  function mikos_a(a){
    mikos = a;
  }


  function katheti_line_sketi(a){
    ypsos = a;
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.beginPath();
    ctx.moveTo(10,30);
    //Πανω βέλος
    //ctx.lineTo(6,35);
    //ctx.lineTo(14,35);
    //ctx.lineTo(10,30);
    //Megali grammi
    ctx.lineTo(10,30 + img.height);
    //Κατω βέλος
    //ctx.lineTo(6,30 + img.height - 5);
    //ctx.lineTo(14,30 + img.height - 5);
    //ctx.lineTo(10,30 + img.height);
    //end κατω βέλος
    ctx.save();
    ctx.strokeStyle = 'red';
    ctx.rotate(-Math.PI / 2);
    ctx.stroke();
    ctx.stroke();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.fillText(a+" mm",-40 - (img.height/2),8);
    ctx.restore();

    ctx.strokeStyle = 'red';
    ctx.moveTo(5,30);
    ctx.lineTo(15,30);
    ctx.moveTo(5,30 +img.height);
    ctx.lineTo(15,30 + img.height);
    ctx.stroke();
  }

  function katheti_line_sketi_mono_epik(ypsos){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.beginPath();
    ctx.moveTo(10,20);
    //Πανω βέλος
    //ctx.lineTo(6,35);
    //ctx.lineTo(14,35);
    //ctx.lineTo(10,30);
    //Megali grammi
    ctx.lineTo(10,30 + img.height);
    //Κατω βέλος
    //ctx.lineTo(6,30 + img.height - 5);
    //ctx.lineTo(14,30 + img.height - 5);
    //ctx.lineTo(10,30 + img.height);
    //end κατω βέλος
    ctx.save();
    ctx.strokeStyle = 'red';
    ctx.rotate(-Math.PI / 2);
    ctx.stroke();
    ctx.stroke();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.fillText(ypsos+" mm",-40 - (img.height/2),8);
    ctx.restore();

    ctx.moveTo(5,20);
    ctx.lineTo(15,20);
    ctx.moveTo(5,30 +img.height);
    ctx.lineTo(15,30 + img.height);
    ctx.stroke();
  }

  function katheti_line_sketi_epik_pro_pa(ypsos){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.beginPath();
    ctx.moveTo(10,15);
    //Πανω βέλος
    //ctx.lineTo(6,35);
    //ctx.lineTo(14,35);
    //ctx.lineTo(10,30);
    //Megali grammi
    ctx.lineTo(10,30 + img.height);
    //Κατω βέλος
    //ctx.lineTo(6,30 + img.height - 5);
    //ctx.lineTo(14,30 + img.height - 5);
    //ctx.lineTo(10,30 + img.height);
    //end κατω βέλος
    ctx.save();
    ctx.strokeStyle = 'red';
    ctx.rotate(-Math.PI / 2);
    ctx.stroke();
    ctx.stroke();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.fillText(ypsos+" mm",-40 - (img.height/2),8);
    ctx.restore();

    ctx.moveTo(5,15);
    ctx.lineTo(15,15);
    ctx.moveTo(5,30 +img.height);
    ctx.lineTo(15,30 + img.height);
    ctx.stroke();
  }

  function katheti_line_sketi_pro_pa(ypsos){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.beginPath();
    ctx.moveTo(10,25);
    //Πανω βέλος
    //ctx.lineTo(6,35);
    //ctx.lineTo(14,35);
    //ctx.lineTo(10,30);
    //Megali grammi
    ctx.lineTo(10,30 + img.height);
    //Κατω βέλος
    //ctx.lineTo(6,30 + img.height - 5);
    //ctx.lineTo(14,30 + img.height - 5);
    //ctx.lineTo(10,30 + img.height);
    //end κατω βέλος
    ctx.save();
    ctx.strokeStyle = 'red';
    ctx.rotate(-Math.PI / 2);
    ctx.stroke();
    ctx.stroke();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.fillText(ypsos+" mm",-40 - (img.height/2),8);
    ctx.restore();

    ctx.moveTo(5,25);
    ctx.lineTo(15,25);
    ctx.moveTo(5,30 +img.height);
    ctx.lineTo(15,30 + img.height);
    ctx.stroke();
  }

  function katheti_line_sketi_epik_pro_ka(ypsos){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.beginPath();
    ctx.moveTo(10,20);
    //Πανω βέλος
    //ctx.lineTo(6,35);
    //ctx.lineTo(14,35);
    //ctx.lineTo(10,30);
    //Megali grammi
    ctx.lineTo(10,30+ 5 + img.height);
    //Κατω βέλος
    //ctx.lineTo(6,30 + img.height - 5);
    //ctx.lineTo(14,30 + img.height - 5);
    //ctx.lineTo(10,30 + img.height);
    //end κατω βέλος
    ctx.save();
    ctx.strokeStyle = 'red';
    ctx.rotate(-Math.PI / 2);
    ctx.stroke();
    ctx.stroke();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.fillText(ypsos+" mm",-40 - (img.height/2),8);
    ctx.restore();

    ctx.moveTo(5,20);
    ctx.lineTo(15,20);
    ctx.moveTo(5,30+ 5 +img.height);
    ctx.lineTo(15,30+ 5 + img.height);
    ctx.stroke();
  }

  function katheti_line_sketi_pro_ka(ypsos){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.beginPath();
    ctx.moveTo(10,30);
    //Πανω βέλος
    //ctx.lineTo(6,35);
    //ctx.lineTo(14,35);
    //ctx.lineTo(10,30);
    //Megali grammi
    ctx.lineTo(10,30 + 5 + img.height);
    //Κατω βέλος
    //ctx.lineTo(6,30 + img.height - 5);
    //ctx.lineTo(14,30 + img.height - 5);
    //ctx.lineTo(10,30 + img.height);
    //end κατω βέλος
    ctx.save();
    ctx.strokeStyle = 'red';
    ctx.rotate(-Math.PI / 2);
    ctx.stroke();
    ctx.stroke();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.fillText(ypsos+" mm",-40 - (img.height/2),8);
    ctx.restore();

    ctx.moveTo(5,30);
    ctx.lineTo(15,30);
    ctx.moveTo(5,30+ 5 +img.height);
    ctx.lineTo(15,30+ 5 + img.height);
    ctx.stroke();
  }

  function katheti_line_sketi_ola(ypsos){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.beginPath();
    ctx.moveTo(10,15);
    //Πανω βέλος
    //ctx.lineTo(6,35);
    //ctx.lineTo(14,35);
    //ctx.lineTo(10,30);
    //Megali grammi
    ctx.lineTo(10,30 + 5 + img.height);
    //Κατω βέλος
    //ctx.lineTo(6,30 + img.height - 5);
    //ctx.lineTo(14,30 + img.height - 5);
    //ctx.lineTo(10,30 + img.height);
    //end κατω βέλος
    ctx.save();
    ctx.strokeStyle = 'red';
    ctx.rotate(-Math.PI / 2);
    ctx.stroke();
    ctx.stroke();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.fillText(ypsos+" mm",-40 - (img.height/2),8);
    ctx.restore();

    ctx.moveTo(5,15);
    ctx.lineTo(15,15);
    ctx.moveTo(5,30+ 5 +img.height);
    ctx.lineTo(15,30+ 5 + img.height);
    ctx.stroke();
  }

  function katheti_line_sketi_panw_katw(ypsos){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.beginPath();
    ctx.moveTo(10,25);
    //Πανω βέλος
    //ctx.lineTo(6,35);
    //ctx.lineTo(14,35);
    //ctx.lineTo(10,30);
    //Megali grammi
    ctx.lineTo(10,30 + 5 + img.height);
    //Κατω βέλος
    //ctx.lineTo(6,30 + img.height - 5);
    //ctx.lineTo(14,30 + img.height - 5);
    //ctx.lineTo(10,30 + img.height);
    //end κατω βέλος
    ctx.save();
    ctx.strokeStyle = 'red';
    ctx.rotate(-Math.PI / 2);
    ctx.stroke();
    ctx.stroke();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.fillText(ypsos+" mm",-40 - (img.height/2),8);
    ctx.restore();

    ctx.moveTo(5,25);
    ctx.lineTo(15,25);
    ctx.moveTo(5,30+ 5 +img.height);
    ctx.lineTo(15,30+ 5 + img.height);
    ctx.stroke();
  }

  function orizontia_line_sketi(a){
    mikos = a;
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.beginPath();
    ctx.moveTo(30,10);
    ctx.lineTo(30 + img.width,10);
    ctx.strokeStyle = 'red';
    ctx.stroke();
    ctx.stroke();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(a+" mm",30 + (img.width/2),8);
    
    //ctx.strokeStyle = 'red';
    ctx.moveTo(30,5);
    ctx.lineTo(30,15);
    ctx.moveTo(30 + img.width,5);
    ctx.lineTo(30 + img.width,15);
    ctx.stroke();
  }

  function orizontia_line_sketi_ar(mikos){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.beginPath();
    ctx.moveTo(25,10);
    ctx.lineTo(30 + img.width,10);
    ctx.strokeStyle = 'red';
    ctx.stroke();
    ctx.stroke();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(mikos+" mm",30 + (img.width/2),8);

    ctx.moveTo(25,5);
    ctx.lineTo(25,15);
    ctx.moveTo(30 + img.width,5);
    ctx.lineTo(30 + img.width,15);
    ctx.stroke();
  }

  function orizontia_line_sketi_de(mikos){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.beginPath();
    ctx.moveTo(30,10);
    ctx.lineTo(30+ 5 + img.width,10);
    ctx.strokeStyle = 'red';
    ctx.stroke();
    ctx.stroke();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(mikos+" mm",30 + (img.width/2),8);

    ctx.moveTo(30,5);
    ctx.lineTo(30,15);
    ctx.moveTo(30+ 5 + img.width,5);
    ctx.lineTo(30+ 5 + img.width,15);
    ctx.stroke();
  }

  function orizontia_line_sketi_de_ar(mikos){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    img = document.getElementById("canvas_image");
    ctx.beginPath();
    ctx.moveTo(25,10);
    ctx.lineTo(30+ 5 + img.width,10);
    ctx.strokeStyle = 'red';
    ctx.stroke();
    ctx.stroke();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(mikos+" mm",30 + (img.width/2),8);

    ctx.moveTo(25,5);
    ctx.lineTo(25,15);
    ctx.moveTo(30+ 5 + img.width,5);
    ctx.lineTo(30+ 5 + img.width,15);
    ctx.stroke();
  }

  //Στο save εχω την αρχικη εικονα...Μονο το κουφωμα δηλαδη
  function arxikiEikona(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    save = ctx.getImageData(0,0,c.width,c.height);
  }

  function zwgrafia(decimal,epikathimeno,ekswteriko,col_rolou,col_pers,col_p,col_k,col_d,col_a,leaf){
    /*
    Περνω μεσω ajax τα χρωματα για καθετι και μετα τα χρησιμοποιω για να ζωγραφισω την εικονα με τα 
    σωστα χρωματα.
    */
    /*
    if ( col_rolou != 0){
    $.ajax({
          type:'GET',
          url:'/etic/color_epistrofi',
          dataType: "json",
          data: { color: col_rolou },
          success: function(data) {
            col_rolou = data;
            console.log(data) //Δινει στοιχεια για τα data
          },
          error: function(data) { 
          }
        });//end ejax
    }
    if (col_pers != 0){
    $.ajax({
          type:'GET',
          url:'/etic/color_epistrofi',
          dataType: "json",
          data: { color: col_pers },
          success: function(data) {
            col_pers = data;
            console.log(data) //Δινει στοιχεια για τα data
          },
          error: function(data) { 
          }
        });//end ejax
    }
    if (col_p != 0){
    $.ajax({
          type:'GET',
          url:'/etic/color_epistrofi',
          dataType: "json",
          data: { color: col_p },
          success: function(data) {
            col_p = data;
            console.log(data) //Δινει στοιχεια για τα data
          },
          error: function(data) { 
          }
        });//end ejax
    }
    if (col_k != 0 ){
    $.ajax({
          type:'GET',
          url:'/etic/color_epistrofi',
          dataType: "json",
          data: { color: col_k },
          success: function(data) {
            col_k = data;
            console.log(data) //Δινει στοιχεια για τα data
          },
          error: function(data) { 
          }
        });//end ejax
    }
    if (col_d != 0){
    $.ajax({
          type:'GET',
          url:'/etic/color_epistrofi',
          dataType: "json",
          data: { color: col_d },
          success: function(data) {
            col_d = data;
            console.log(data) //Δινει στοιχεια για τα data
          },
          error: function(data) { 
          }
        });//end ejax
    }
    if (col_a != 0){
    $.ajax({
          type:'GET',
          url:'/etic/color_epistrofi',
          dataType: "json",
          data: { color: col_a },
          success: function(data) {
            col_a = data;
            console.log(data) //Δινει στοιχεια για τα data
          },
          error: function(data) { 
          }
        });//end ejax
    }
    */

    //Εδω τελειωνουν τα ajax για τα χρωματα
    //alert(decimal);
    //alert(epikathimeno);
    //alert(ekswteriko);
    //alert(col_rolou);
    //alert(col_p);
    //alert(col_k);
    //alert(col_d);
    //alert(col_a);
    /*
    Καθε φορα προβαλω την αρχικη εικονα (αδεια) και ζωγραφιζω αυτα που θελω
    */
    if (decimal == 0){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        katheti_line_sketi(ypsos);
        orizontia_line_sketi(mikos);
    }//end 0
    if (decimal == 1){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        //Ελεγχω αν ειναι επικαθημενο η οχι
         if (epikathimeno != 0){
            if ( leaf == "1fullo"){
              EpikathimenaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrif(col_rolou);
            }
            katheti_line_sketi_mono_epik(ypsos)
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            katheti_line_sketi(ypsos);
         }//end ελεγχου
         orizontia_line_sketi(mikos);
    }//end 1
    if (decimal == 2){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
        orizontia_line_sketi(mikos);
        katheti_line_sketi(ypsos);
    }//end 2
    if (decimal == 3){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        //Ελεγχω αν ειναι επικαθημενο η οχι
         if (epikathimeno != 0){
            if ( leaf == "1fullo"){
              EpikathimenaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrif(col_rolou);
            }
            katheti_line_sketi_mono_epik(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            katheti_line_sketi(ypsos);
         }//end ελεγχου
         if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
        orizontia_line_sketi(mikos);
    }//end 3
    if (decimal == 4){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilPanwMikro(col_p);
        katheti_line_sketi_pro_pa(ypsos);
        orizontia_line_sketi(mikos);
    }//end 4
    if (decimal == 5){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        //Ελεγχω αν ειναι επικαθημενο η οχι
         if (epikathimeno != 0){
            if ( leaf == "1fullo"){
              EpikathimenaMonPro(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDifPro(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrifPro(col_rolou);
            }
            ProfilPanwMikro(col_p);
            katheti_line_sketi_epik_pro_pa(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            katheti_line_sketi(ypsos);
            ProfilPanwMikro(col_p);
         }//end ελεγχου
         orizontia_line_sketi(mikos);
    }//end 5
    if (decimal == 6){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
        ProfilPanwMikro(col_p);
        katheti_line_sketi_pro_pa(ypsos);
        orizontia_line_sketi(mikos);
    }// end 6
    if (decimal == 7){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
        if (epikathimeno != 0){
            if ( leaf == "1fullo"){
              EpikathimenaMonPro(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDifPro(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrifPro(col_rolou);
            }
            ProfilPanwMikro(col_p);
            katheti_line_sketi_epik_pro_pa(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            ProfilPanwMikro(col_p);
            katheti_line_sketi_pro_pa(ypsos);
         }//end ελεγχου
         orizontia_line_sketi(mikos);
    }//end 7
    if (decimal == 8){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilKatwMikro(col_k);
        katheti_line_sketi_pro_ka(ypsos);
        orizontia_line_sketi(mikos);
    }//end 8
    if (decimal == 9){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
            if ( leaf == "1fullo"){
              EpikathimenaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrif(col_rolou);
            }
            katheti_line_sketi_epik_pro_ka(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            katheti_line_sketi_pro_ka(ypsos);
         }//end ελεγχου
         ProfilKatwMikro(col_k);
         orizontia_line_sketi(mikos);
    }// end 9
    if (decimal == 10){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
        ProfilKatwMikro(col_k);
        katheti_line_sketi_pro_ka(ypsos);
        orizontia_line_sketi(mikos);
    }
    if (decimal == 11){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
            if ( leaf == "1fullo"){
              EpikathimenaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrif(col_rolou);
            }
            katheti_line_sketi_epik_pro_ka(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            katheti_line_sketi_pro_ka(ypsos);
         }//end ελεγχου
         if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
        ProfilKatwMikro(col_k);
        orizontia_line_sketi(mikos);
    }//end 11
    if (decimal == 12 ){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilKatwMikro(col_k);
        ProfilPanwMikro(col_p);
        katheti_line_sketi_panw_katw(ypsos);
        orizontia_line_sketi(mikos);
    }// end 12
    if (decimal == 13){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
            if ( leaf == "1fullo"){
              EpikathimenaMonPro(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDifPro(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrifPro(col_rolou);
            }
            ProfilPanwMikro(col_p);
            katheti_line_sketi_ola(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            ProfilPanwMikro(col_p);
            katheti_line_sketi_panw_katw(ypsos);
         }//end ελεγχου
        ProfilKatwMikro(col_k);
        orizontia_line_sketi(mikos);
    }//end 13
    if ( decimal == 14){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
        ProfilKatwMikro(col_k);
        ProfilPanwMikro(col_p);
        katheti_line_sketi_panw_katw(ypsos);
        orizontia_line_sketi(mikos);
    }//end 14
    if (decimal == 15){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
            if ( leaf == "1fullo"){
              EpikathimenaMonPro(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDifPro(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrifPro(col_rolou);
            }
            ProfilPanwMikro(col_p);
            katheti_line_sketi_ola(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            ProfilPanwMikro(col_p);
            katheti_line_sketi_panw_katw(ypsos);
         }//end ελεγχου
        ProfilKatwMikro(col_k);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
        orizontia_line_sketi(mikos);
    }//end 15
    if (decimal == 16){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilDeksiaMikro(col_d);
        orizontia_line_sketi_de(mikos);
        katheti_line_sketi(ypsos);
    }//end 16
    if ( decimal == 17){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
            if ( leaf == "1fullo"){
              EpikathimenaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrif(col_rolou);
            }
            ProfilDeksiaMegalo1(col_d);
            katheti_line_sketi_mono_epik(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            ProfilDeksiaMikro(col_d);
            katheti_line_sketi(ypsos);
         }//end ελεγχου
         orizontia_line_sketi_de(mikos);
    }//end 17
    if (decimal == 18){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
        ProfilDeksiaMikro(col_d);
        katheti_line_sketi(ypsos);
        orizontia_line_sketi_de(mikos);
    }//end 18
    if (decimal == 19){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
        if (epikathimeno != 0){
            if ( leaf == "1fullo"){
              EpikathimenaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrif(col_rolou);
            }
            ProfilDeksiaMegalo1(col_d);
            katheti_line_sketi_mono_epik(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            katheti_line_sketi(ypsos);
            ProfilDeksiaMikro(col_d);
         }//end ελεγχου
         orizontia_line_sketi_de(mikos);
    }//end 19
    if (decimal == 20){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilDeksiaMikro(col_d);
        ProfilPanwMegaloDe(col_p);
        katheti_line_sketi_pro_pa(ypsos);
        orizontia_line_sketi_de(mikos);
    }
    if (decimal == 21){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
            if ( leaf == "1fullo"){
              EpikathimenaMonPro(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDifPro(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrifPro(col_rolou);
            }
            ProfilDeksiaMegalo2(col_d);
            ProfilPanwMikro(col_p);
            katheti_line_sketi_epik_pro_pa(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            ProfilDeksiaMikro(col_d);
            ProfilPanwMegaloDe(col_p);
            katheti_line_sketi_pro_pa(ypsos);
         }//end ελεγχου
         orizontia_line_sketi_de(mikos);
    }//end 21
    if (decimal == 22){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
        ProfilPanwMegaloDe(col_p);
        ProfilDeksiaMikro(col_d);
        katheti_line_sketi_pro_pa(ypsos);
        orizontia_line_sketi_de(mikos);
    }//end 22
    if (decimal == 23){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
        if (epikathimeno != 0){
            if ( leaf == "1fullo"){
              EpikathimenaMonPro(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDifPro(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrifPro(col_rolou);
            }
            ProfilDeksiaMegalo2(col_d);
            ProfilPanwMikro(col_p);
            katheti_line_sketi_epik_pro_pa(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            ProfilDeksiaMikro(col_d);
            ProfilPanwMegaloDe(col_p);
            katheti_line_sketi_pro_pa(ypsos);
         }//end ελεγχου
         orizontia_line_sketi_de(mikos);
    }//end 23
    if (decimal == 24){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilKatwMegaloDe(col_k);
        ProfilDeksiaMikro(col_d);
        orizontia_line_sketi_de(mikos);
        katheti_line_sketi_pro_ka(ypsos);
    }//end 24
    if (decimal == 25){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
            if ( leaf == "1fullo"){
              EpikathimenaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrif(col_rolou);
            }
            ProfilDeksiaMegalo1(col_d);
            katheti_line_sketi_epik_pro_ka(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            ProfilDeksiaMikro(col_d);
            katheti_line_sketi_pro_ka(ypsos);
         }//end ελεγχου
         ProfilKatwMegaloDe(col_k);
         orizontia_line_sketi_de(mikos);
    }//end 25
    if ( decimal == 26){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
        ProfilKatwMegaloDe(col_k);
        ProfilDeksiaMikro(col_d);
        katheti_line_sketi_pro_ka(ypsos);
        orizontia_line_sketi_de(mikos);
    }//end 26
    if (decimal == 27){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
        if (epikathimeno != 0){
            if ( leaf == "1fullo"){
              EpikathimenaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrif(col_rolou);
            }
            ProfilDeksiaMegalo1(col_d);
            katheti_line_sketi_epik_pro_ka(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            ProfilDeksiaMikro(col_d);
            katheti_line_sketi_pro_ka(ypsos);
         }//end ελεγχου
         ProfilKatwMegaloDe(col_k);
         orizontia_line_sketi_de(mikos);
    }//end 27
    if (decimal == 28){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilPanwMegaloDe(col_p);
        ProfilKatwMegaloDe(col_k);
        ProfilDeksiaMikro(col_d);
        katheti_line_sketi_panw_katw(ypsos);
        orizontia_line_sketi_de(mikos);
    }//end 28
    if (decimal == 29){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
            if ( leaf == "1fullo"){
              EpikathimenaMonPro(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDifPro(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrifPro(col_rolou);
            }
            ProfilDeksiaMegalo2(col_d);
            ProfilPanwMikro(col_p);
            katheti_line_sketi_ola(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            ProfilDeksiaMikro(col_d);
            katheti_line_sketi_panw_katw(ypsos);
         }//end ελεγχου
         ProfilKatwMegaloDe(col_k);
         orizontia_line_sketi_de(mikos);
    }//end 29
    if (decimal == 30){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilPanwMegaloDe(col_p);
        ProfilKatwMegaloDe(col_k);
        ProfilDeksiaMikro(col_d);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
        katheti_line_sketi_panw_katw(ypsos);
        orizontia_line_sketi_de(mikos);
    }//end 30
    if (decimal == 31){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
            if ( leaf == "1fullo"){
              EpikathimenaMonPro(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDifPro(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrifPro(col_rolou);
            }
            ProfilDeksiaMegalo2(col_d);
            ProfilPanwMikro(col_p);
            katheti_line_sketi_ola(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            ProfilPanwMegaloDe(col_p);
            ProfilDeksiaMikro(col_d);
            katheti_line_sketi_panw_katw(ypsos);
         }//end ελεγχου
         ProfilKatwMegaloDe(col_k);
         if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
        orizontia_line_sketi_de(mikos);
    }//end 31
    if (decimal == 32){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilAristeraMikro(col_a);
        katheti_line_sketi(ypsos);
        orizontia_line_sketi_ar(mikos);
    }//end 32
    if (decimal == 33){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
        if ( leaf == "1fullo"){
              EpikathimenaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrif(col_rolou);
            }
            ProfilAristeraMegalo1(col_a);
            katheti_line_sketi_mono_epik(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            ProfilAristeraMikro(col_a);
            katheti_line_sketi(ypsos);
         }//end ελεγχου
         orizontia_line_sketi_ar(mikos);
    }//end 33
    if (decimal == 34){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
        ProfilAristeraMikro(col_a);
        katheti_line_sketi(ypsos);
        orizontia_line_sketi_ar(mikos);
    }//end 34
    if (decimal == 35){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
        if ( leaf == "1fullo"){
              EpikathimenaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrif(col_rolou);
            }
            ProfilAristeraMegalo1(col_a);
            katheti_line_sketi_mono_epik(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            ProfilAristeraMikro(col_a);
            katheti_line_sketi(ypsos);
        }//end if
        orizontia_line_sketi_ar(mikos);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
    }//end 35
    if (decimal == 36){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilPanwMegaloAr(col_p);
        ProfilAristeraMikro(col_a);
        katheti_line_sketi_pro_pa(ypsos);
        orizontia_line_sketi_ar(mikos);
    }//end 36
    if (decimal == 37){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
        if ( leaf == "1fullo"){
              EpikathimenaMonPro(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDifPro(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrifPro(col_rolou);
            }
            ProfilAristeraMegalo2(col_a);
            ProfilPanwMikro(col_p);
            katheti_line_sketi_epik_pro_pa(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            ProfilAristeraMikro(col_a);
            ProfilPanwMegaloAr(col_p);
            katheti_line_sketi_pro_pa(ypsos);
        }//end if
        orizontia_line_sketi_ar(mikos);
    }//end 37
    if (decimal == 38){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
        ProfilPanwMegaloAr(col_p);
        ProfilAristeraMikro(col_a);
        katheti_line_sketi_pro_pa(ypsos);
        orizontia_line_sketi_ar(mikos);
    }//end 38
    if (decimal == 39){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
        if ( leaf == "1fullo"){
              EpikathimenaMonPro(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDifPro(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrifPro(col_rolou);
            }
            ProfilAristeraMegalo2(col_a);
            ProfilPanwMikro(col_p);
            katheti_line_sketi_epik_pro_pa(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            ProfilAristeraMikro(col_a);
            ProfilPanwMegaloAr(col_p);
            katheti_line_sketi_pro_pa(ypsos);
        }//end if
        orizontia_line_sketi_ar(mikos);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
    }//end 39
    if (decimal == 40){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilKatwMegaloAr(col_k);
        ProfilAristeraMikro(col_a);
        katheti_line_sketi_pro_ka(ypsos);
        orizontia_line_sketi_ar(mikos);
    }//end 40
    if (decimal == 41){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
        if ( leaf == "1fullo"){
              EpikathimenaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrif(col_rolou);
            }
            ProfilAristeraMegalo1(col_a);
            katheti_line_sketi_epik_pro_ka(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            katheti_line_sketi_pro_ka(ypsos);
            ProfilAristeraMegalo1(col_a);
        }//end if
        orizontia_line_sketi_ar(mikos);
        ProfilKatwMegaloAr(col_k);
    }//end 41
    if (decimal == 42){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
        ProfilKatwMegaloAr(col_k);
        ProfilAristeraMikro(col_a);
        orizontia_line_sketi_ar(mikos);
        katheti_line_sketi_pro_ka(ypsos);
    }//end 42
    if (decimal == 43){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
        if ( leaf == "1fullo"){
              EpikathimenaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrif(col_rolou);
            }
            ProfilAristeraMegalo1(col_a);
            katheti_line_sketi_epik_pro_ka(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            katheti_line_sketi_pro_ka(ypsos);
            //ProfilAristeraMegalo1(col_a);
            ProfilAristeraMikro(col_a);
        }//end if
        orizontia_line_sketi_ar(mikos);
        ProfilKatwMegaloAr(col_k);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
    }//end 43
    if(decimal == 44){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilPanwMegaloAr(col_p);
        ProfilKatwMegaloAr(col_k);
        ProfilAristeraMikro(col_a);
        katheti_line_sketi_panw_katw(ypsos);
        orizontia_line_sketi_ar(mikos);
    }//end 44
    if (decimal == 45){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
        if ( leaf == "1fullo"){
              EpikathimenaMonPro(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDifPro(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrifPro(col_rolou);
            }
            ProfilAristeraMegalo2(col_a);
            ProfilPanwMikro(col_p);
            katheti_line_sketi_ola(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            katheti_line_sketi_panw_katw(ypsos);
            ProfilAristeraMikro(col_a);
            ProfilPanwMegaloAr(col_p);
        }//end if
        orizontia_line_sketi_ar(mikos);
        ProfilKatwMegaloAr(col_k);
    }//end 45
    if (decimal == 46){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilPanwMegaloAr(col_p);
        ProfilKatwMegaloAr(col_a);
        ProfilAristeraMikro(col_a);
        katheti_line_sketi_panw_katw(ypsos);
        orizontia_line_sketi_ar(mikos);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
    }//end 46
    if (decimal == 47){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
        if ( leaf == "1fullo"){
              EpikathimenaMonPro(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDifPro(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrifPro(col_rolou);
            }
            ProfilAristeraMegalo2(col_a);
            ProfilPanwMikro(col_p);
            katheti_line_sketi_ola(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            katheti_line_sketi_panw_katw(ypsos);
            ProfilAristeraMikro(col_a);
            ProfilPanwMegaloDe(col_p);
        }//end if
        orizontia_line_sketi_ar(mikos);
        ProfilKatwMegaloAr(col_k);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
    }//end 47
    if (decimal == 48){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilAristeraMikro(col_a);
        ProfilDeksiaMikro(col_d);
        katheti_line_sketi(ypsos);
        orizontia_line_sketi_de_ar(mikos);
    }//end 48
    if (decimal == 49){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
        if ( leaf == "1fullo"){
              EpikathimenaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrif(col_rolou);
            }
            ProfilAristeraMegalo1(col_a);
            ProfilDeksiaMegalo1(col_d);
            katheti_line_sketi_mono_epik(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            ProfilDeksiaMikro(col_d);
            ProfilAristeraMikro(col_a);
            katheti_line_sketi(ypsos);
        }//end if
        orizontia_line_sketi_de_ar(mikos);
    }//end 49
    if (decimal == 50){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilAristeraMikro(col_a);
        ProfilDeksiaMikro(col_d);
        katheti_line_sketi(ypsos);
        orizontia_line_sketi_de_ar(mikos);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
    }//end 50
    if (decimal == 51){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
        if ( leaf == "1fullo"){
              EpikathimenaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrif(col_rolou);
            }
            ProfilAristeraMegalo1(col_a);
            ProfilDeksiaMegalo1(col_d);
            katheti_line_sketi_mono_epik(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            ProfilAristeraMikro(col_a);
            ProfilDeksiaMikro(col_d);
            katheti_line_sketi(ypsos);
        }//end if
        orizontia_line_sketi_de_ar(mikos);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
    }//end 51
    if (decimal == 52){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilPanwMegalo(col_p);
        ProfilAristeraMikro(col_a);
        ProfilDeksiaMikro(col_d);
        katheti_line_sketi_pro_pa(ypsos);
        orizontia_line_sketi_de_ar(mikos);
    }//end 52
    if (decimal == 53){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
        if ( leaf == "1fullo"){
              EpikathimenaMonPro(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDifPro(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrifPro(col_rolou);
            }
            ProfilAristeraMegalo2(col_a);
            ProfilDeksiaMegalo2(col_d);
            ProfilPanwMikro(col_p);
            katheti_line_sketi_epik_pro_pa(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            katheti_line_sketi_pro_pa(ypsos);
            ProfilAristeraMikro(col_a);
            ProfilDeksiaMikro(col_d);
            ProfilPanwMegalo(col_p);
        }//end if
        orizontia_line_sketi_de_ar(mikos);
    }//end 53
    if (decimal == 54){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilPanwMegalo(col_p);
        ProfilAristeraMikro(col_a);
        ProfilDeksiaMikro(col_d);
        katheti_line_sketi_pro_pa(ypsos);
        orizontia_line_sketi_de_ar(mikos);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
    }//end 54
    if (decimal == 55){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
        if ( leaf == "1fullo"){
              EpikathimenaMonPro(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDifPro(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrifPro(col_rolou);
            }
            ProfilAristeraMegalo2(col_a);
            ProfilDeksiaMegalo2(col_d);
            ProfilPanwMikro(col_p);
            katheti_line_sketi_epik_pro_pa(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            katheti_line_sketi_pro_pa(ypsos);
            ProfilAristeraMikro(col_a);
            ProfilDeksiaMikro(col_d);
            ProfilPanwMegalo(col_p);
        }//end if
        orizontia_line_sketi_de_ar(mikos);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
    }//end 55
    if (decimal == 56){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilAristeraMikro(col_a);
        ProfilDeksiaMikro(col_d);
        ProfilKatwMegalo(col_k);
        katheti_line_sketi_pro_ka(ypsos);
        orizontia_line_sketi_de_ar(mikos);
    }//end 56
    if (decimal == 57){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
        if ( leaf == "1fullo"){
              EpikathimenaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrif(col_rolou);
            }
            katheti_line_sketi_epik_pro_ka(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            katheti_line_sketi_pro_ka(ypsos);
        }//end if
        ProfilAristeraMegalo1(col_a);
        ProfilDeksiaMegalo1(col_d);
        ProfilKatwMegalo(col_k);
        orizontia_line_sketi_de_ar(mikos);
    }//end 57
    if (decimal == 58){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilAristeraMikro(col_a);
        ProfilDeksiaMikro(col_d);
        ProfilKatwMegalo(col_k);
        katheti_line_sketi_pro_ka(ypsos);
        orizontia_line_sketi_de_ar(mikos);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
    }//end 58
    if (decimal == 59){
         var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
        if ( leaf == "1fullo"){
              EpikathimenaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrif(col_rolou);
            }
            katheti_line_sketi_epik_pro_ka(ypsos);
            ProfilAristeraMegalo1(col_a);
            ProfilDeksiaMegalo1(col_d);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            ProfilAristeraMikro(col_a);
            ProfilDeksiaMikro(col_d);
            katheti_line_sketi_pro_ka(ypsos);
        }//end if
        orizontia_line_sketi_de_ar(mikos);
        ProfilKatwMegalo(col_k);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
    }//end 59
    if (decimal == 60){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilPanwMegalo(col_p);
        ProfilKatwMegalo(col_k);
        ProfilDeksiaMikro(col_d);
        ProfilAristeraMikro(col_a);
        katheti_line_sketi_panw_katw(ypsos);
        orizontia_line_sketi_de_ar(mikos);
    }//end 60
    if (decimal == 61){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
        if ( leaf == "1fullo"){
              EpikathimenaMonPro(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDifPro(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrifPro(col_rolou);
            }
            ProfilPanwMikro(col_p);
            ProfilDeksiaMegalo2(col_d);
            ProfilAristeraMegalo2(col_a);
            katheti_line_sketi_ola(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            katheti_line_sketi_panw_katw(ypsos);
            ProfilPanwMegalo(col_p);
            ProfilDeksiaMikro(col_d);
            ProfilAristeraMikro(col_a);
        }//end if
        orizontia_line_sketi_de_ar(mikos);
        ProfilKatwMegalo(col_k);
    }//end 61
    if (decimal == 62){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        ProfilPanwMegalo(col_p);
        ProfilKatwMegalo(col_k);
        ProfilDeksiaMikro(col_d);
        ProfilAristeraMikro(col_a);
        katheti_line_sketi_panw_katw(ypsos);
        orizontia_line_sketi_de_ar(mikos);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
    }//end 62
    if (decimal == 63){
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.putImageData(save,0,0);
        if (epikathimeno != 0){
        if ( leaf == "1fullo"){
              EpikathimenaMonPro(col_rolou);
            }
            if ( leaf == "2fullo"){
              EpikathimenaDifPro(col_rolou);
            }
            if ( leaf == "3fullo"){
              EpikathimenaTrifPro(col_rolou);
            }
            ProfilPanwMikro(col_p);
            ProfilDeksiaMegalo2(col_d);
            ProfilAristeraMegalo2(col_a);
            katheti_line_sketi_ola(ypsos);
         }else{
            if ( leaf == "1fullo"){
              EksoterikaMon(col_rolou);
            }
            if ( leaf == "2fullo"){
              EksoterikaDif(col_rolou);
            }
            if ( leaf == "3fullo"){
              EksoterikaTrif(col_rolou);
            }
            katheti_line_sketi_panw_katw(ypsos);
            ProfilPanwMegalo(col_p);
            ProfilDeksiaMikro(col_d);
            ProfilAristeraMikro(col_a);
        }//end if
        orizontia_line_sketi_de_ar(mikos);
        ProfilKatwMegalo(col_k);
        if ( leaf == "1fullo"){
          PersidesMon(col_pers);
        }
        if ( leaf == "2fullo"){
          PersidesDif(col_pers);
        }
        if ( leaf == "3fullo"){
          PersidesTrif(col_pers);
        }//end if
    }//end 63
  }//end function


  /////// Υπολογισμος json ////////
  //Ajax για αρχικη τιμη
  function times_json(open_type_name,width,height,line_name,mesa_eksw,color_name,new_width,new_height,epikathimeno_rolo,eksoteriko_rolo,persida,tzami,profil_deksia,profil_aristera,profil_panw,profil_katw,input_deksia,input_panw,input_katw,input_aristera,typos,color_typos,odoigos,color_deksia,color_aristera,color_panw,color_katw,color_fulou,lastixo,profil_deksia_1,profil_deksia_1_arithmos,profil_deksia_2,profil_deksia_2_arithmos,profil_deksia_3,profil_deksia_3_arithmos,profil_aristera_1,profil_aristera_1_arithmos,profil_aristera_2,profil_aristera_2_arithmos,profil_aristera_3,profil_aristera_3_arithmos,profil_panw_1,profil_panw_1_arithmos,profil_panw_2,profil_panw_2_arithmos,profil_panw_3,profil_panw_3_arithmos,profil_katw_1,profil_katw_1_arithmos,profil_katw_2,profil_katw_2_arithmos,profil_katw_3,profil_katw_3_arithmos,typos_katw_1,typos_katw_1_arithmos,typos_katw_2,typos_katw_2_arithmos,typos_katw_3,typos_katw_3_arithmos){
    //alert(width);
    $.ajax({
      type:'GET',
      url:'/etic/price.json',
      dataType: "json",
      data: { open_type_name: open_type_name ,
              width: width,
              height: height,
              line_name: line_name,
              mesa_eksw: mesa_eksw,
              color_name: color_name,
              color_deksia: color_deksia,
              color_aristera: color_aristera,
              color_panw: color_panw,
              color_katw: color_katw,
              color_fulou: color_fulou,
              lastixo: lastixo,
              new_width: new_width,
              new_height: new_height,
              epik_rolo: epikathimeno_rolo,
              ekso_rolo: eksoteriko_rolo,
              persida: persida,
              tzamia: tzami,
              profil_deksia: profil_deksia,
              posotita_deksia_profil: input_deksia,
              profil_panw: profil_panw,
              posotita_panw_profil: input_panw,
              profil_katw: profil_katw,
              posotita_katw_profil: input_katw,
              profil_aristera: profil_aristera,
              posotita_aristera_profil: input_aristera,
              typos: typos,
              color_typos: color_typos,
              odoigos_rolou: odoigos,
              profil_deksia_1: profil_deksia_1,
              profil_deksia_1_arithmos: profil_deksia_1_arithmos,
              profil_deksia_2: profil_deksia_2,
              profil_deksia_2_arithmos: profil_deksia_2_arithmos,
              profil_deksia_3: profil_deksia_3,
              profil_deksia_3_arithmos: profil_deksia_3_arithmos ,//To ιδιο με ολα απλα βαζω μονο το ενα γιατι ειναι κοινο
              profil_aristera_1: profil_aristera_1,
              profil_aristera_1_arithmos: profil_aristera_1_arithmos,
              profil_aristera_2: profil_aristera_2,
              profil_aristera_2_arithmos: profil_aristera_2_arithmos,
              profil_aristera_3: profil_aristera_3,
              profil_aristera_3_arithmos: profil_aristera_3_arithmos,
              profil_panw_1: profil_panw_1,
              profil_panw_1_arithmos: profil_panw_1_arithmos,
              profil_panw_2: profil_panw_2,
              profil_panw_2_arithmos: profil_panw_2_arithmos,
              profil_panw_3: profil_panw_3,
              profil_panw_3_arithmos: profil_panw_3_arithmos,
              profil_katw_1: profil_katw_1,
              profil_katw_1_arithmos: profil_katw_1_arithmos,
              profil_katw_2: profil_katw_2,
              profil_katw_2_arithmos: profil_katw_2_arithmos,
              profil_katw_3: profil_katw_3,
              profil_katw_3_arithmos: profil_katw_3_arithmos,
              typos_katw_1: typos_katw_1,
              typos_katw_1_arithmos: typos_katw_1_arithmos,
              typos_katw_2: typos_katw_2,
              typos_katw_2_arithmos: typos_katw_2_arithmos,
              typos_katw_3: typos_katw_3,
              typos_katw_3_arithmos: typos_katw_3_arithmos },
      success: function(data) {
        arxiki_timi = data.arxiki_timi;
        teliki_timi = data.teliki_timi;
        nea_timi = data.nea_timi;
        epikathimeno_rolo = data.epikathimeno;
        timi_epikathimenou = data.timi_epikathimenou;
        eksoteriko_rolo = data.eksoteriko;
        timi_eksoterikou = data.ekso_rolo_price;
        persida = data.persida_name;
        persida_price = data.persida_price;
        tzami_name = data.tzami;
        tzami_timi = data.tzami_timi;
        profil_name = data.profil_name;
        //profil_price = data.profil_price;
        typos_name = data.typos_name;
        typos_color = data.typos_color;
        typos_price = data.typos_price;
        odoigos_name = data.odoigos_name;
        odoigos_timi = data.odoigos_timi;
        profil_deksia_1 = data.profil_name_deksia_1;
        profil_deksia_1_arithmos = data.profil_posotita_deksia_1;
        profil_price_deksia_1 = data.profil_price_deksia_1;
        profil_deksia_2 = data.profil_name_deksia_2;
        profil_deksia_2_arithmos = data.profil_posotita_deksia_2;
        profil_price_deksia_2 = data.profil_price_deksia_2;
        profil_deksia_3 = data.profil_name_deksia_3;
        profil_deksia_3_arithmos = data.profil_posotita_deksia_3;
        profil_price_deksia_3 = data.profil_price_deksia_3;
        profil_aristera_1 = data.profil_name_aristera_1;
        profil_aristera_1_arithmos = data.profil_posotita_aristera_1;
        profil_price_aristera_1 = data.profil_price_aristera_1;
        profil_aristera_2 = data.profil_name_aristera_2;
        profil_aristera_2_arithmos = data.profil_posotita_aristera_2;
        profil_price_aristera_2 = data.profil_price_aristera_2;
        profil_aristera_3 = data.profil_name_aristera_3;
        profil_aristera_3_arithmos = data.profil_posotita_aristera_3;
        profil_price_aristera_3 = data.profil_price_aristera_3;
        profil_panw_1 = data.profil_name_panw_1;
        profil_panw_1_arithmos = data.profil_posotita_panw_1;
        profil_price_panw_1 = data.profil_price_panw_1;
        profil_panw_2 = data.profil_name_panw_2;
        profil_panw_2_arithmos = data.profil_posotita_panw_2;
        profil_price_panw_2 = data.profil_price_panw_2;
        profil_panw_3 = data.profil_name_panw_3;
        profil_panw_3_arithmos = data.profil_posotita_panw_3;
        profil_price_panw_3 = data.profil_price_panw_3;
        profil_katw_1 = data.profil_name_katw_1;
        profil_katw_1_arithmos = data.profil_posotita_katw_1;
        profil_price_katw_1 = data.profil_price_katw_1;
        profil_katw_2 = data.profil_name_katw_2;
        profil_katw_2_arithmos = data.profil_posotita_katw_2;
        profil_price_katw_2 = data.profil_price_katw_2;
        profil_katw_3 = data.profil_name_katw_3;
        profil_katw_3_arithmos = data.profil_posotita_katw_3;
        profil_price_katw_3 = data.profil_price_katw_3;
        typos_katw_1 = data.typos_name_katw_1;
        typos_katw_1_arithmos = data.typos_posotita_katw_1;
        typos_price_katw_1 = data.typos_price_katw_1;
        typos_katw_2 = data.typos_name_katw_2;
        typos_katw_2_arithmos = data.typos_posotita_katw_2;
        typos_price_katw_2 = data.typos_price_katw_2;
        typos_katw_3 = data.typos_name_katw_3;
        typos_katw_3_arithmos = data.typos_posotita_katw_3;
        typos_price_katw_3 = data.typos_price_katw_3;
        console.log(data) //Δινει στοιχεια για τα data

        // Αλλαγες σε πινακακι //
        $(".arxiki_timi").text(arxiki_timi.toFixed(2));
        $(".teliki_timi").text(teliki_timi.toFixed(2));
        $(".nea_timi").text(nea_timi.toFixed(2));
        if (timi_epikathimenou != 0){
            $(".epik_show_hide").css("display","table-row");
            $(".table_epikathimeno").text(epikathimeno_rolo);
            $(".timi_epikathimenou").text(timi_epikathimenou.toFixed(2));
        }
        else{
            $(".epik_show_hide").css("display","none");
        }
        if (timi_eksoterikou != 0){
            $(".ekso_show_hide").css("display","table-row");
            $(".table_eksoteriko").text(eksoteriko_rolo);
            $(".timi_eksoterikou").text(timi_eksoterikou.toFixed(2));
        }
        else{
            $(".ekso_show_hide").css("display","none");
        }
        if (persida_price != 0){
            $(".persida_show_hide").css("display","table-row");
            $(".table_persida").text(persida);
            $(".timi_persida").text(persida_price.toFixed(2));
        }
        else{
            $(".persida_show_hide").css("display","none");
        }
        if (tzami_timi != 0){
            $(".tzami_show_hide").css("display","table-row");
            $(".table_tzami").text(tzami_name);
            $(".timi_tzami").text(tzami_timi.toFixed(2));
        }
        else{
            $(".tzami_show_hide").css("display","none");
        }
        if (profil_price_deksia_1 != 0){
            $(".profil_deksia_1_show_hide").css("display","table-row");
            $(".table_profil_deksia_1").text(profil_deksia_1);
            $(".table_profil_deksia_1_arithmos").text(profil_deksia_1_arithmos);
            $(".timi_profil_deksia_1").text(profil_price_deksia_1.toFixed(2));
        }
        else{
            $(".profil_deksia_1_show_hide").css("display","none");
        }
        if (profil_price_deksia_2 != 0){
            $(".profil_deksia_2_show_hide").css("display","table-row");
            $(".table_profil_deksia_2").text(profil_deksia_2);
            $(".table_profil_deksia_2_arithmos").text(profil_deksia_2_arithmos);
            $(".timi_profil_deksia_2").text(profil_price_deksia_2.toFixed(2));
        }
        else{
            $(".profil_deksia_2_show_hide").css("display","none");
        }
        if (profil_price_deksia_3 != 0){
            $(".profil_deksia_3_show_hide").css("display","table-row");
            $(".table_profil_deksia_3").text(profil_deksia_3);
            $(".table_profil_deksia_3_arithmos").text(profil_deksia_3_arithmos);
            $(".timi_profil_deksia_3").text(profil_price_deksia_3.toFixed(2));
        }
        else{
            $(".profil_deksia_3_show_hide").css("display","none");
        }
        if (profil_price_aristera_1 != 0){
            $(".profil_aristera_1_show_hide").css("display","table-row");
            $(".table_profil_aristera_1").text(profil_aristera_1);
            $(".table_profil_aristera_1_arithmos").text(profil_aristera_1_arithmos);
            $(".timi_profil_aristera_1").text(profil_price_aristera_1.toFixed(2));
        }
        else{
            $(".profil_aristera_1_show_hide").css("display","none");
        }
        if (profil_price_aristera_2 != 0){
            $(".profil_aristera_2_show_hide").css("display","table-row");
            $(".table_profil_aristera_2").text(profil_aristera_2);
            $(".table_profil_aristera_2_arithmos").text(profil_aristera_2_arithmos);
            $(".timi_profil_aristera_2").text(profil_price_aristera_2.toFixed(2));
        }
        else{
            $(".profil_aristera_2_show_hide").css("display","none");
        }
        if (profil_price_aristera_3 != 0){
            $(".profil_aristera_3_show_hide").css("display","table-row");
            $(".table_profil_aristera_3").text(profil_aristera_3);
            $(".table_profil_aristera_3_arithmos").text(profil_aristera_3_arithmos);
            $(".timi_profil_aristera_3").text(profil_price_aristera_3.toFixed(2));
        }
        else{
            $(".profil_aristera_3_show_hide").css("display","none");
        }
        if (profil_price_panw_1 != 0){
            $(".profil_panw_1_show_hide").css("display","table-row");
            $(".table_profil_panw_1").text(profil_panw_1);
            $(".table_profil_panw_1_arithmos").text(profil_panw_1_arithmos);
            $(".timi_profil_panw_1").text(profil_price_panw_1.toFixed(2));
        }
        else{
            $(".profil_panw_1_show_hide").css("display","none");
        }
        if (profil_price_panw_2 != 0){
            $(".profil_panw_2_show_hide").css("display","table-row");
            $(".table_profil_panw_2").text(profil_panw_2);
            $(".table_profil_panw_2_arithmos").text(profil_panw_2_arithmos);
            $(".timi_profil_panw_2").text(profil_price_panw_2.toFixed(2));
        }
        else{
            $(".profil_panw_2_show_hide").css("display","none");
        }
        if (profil_price_panw_3 != 0){
            $(".profil_panw_3_show_hide").css("display","table-row");
            $(".table_profil_panw_3").text(profil_panw_3);
            $(".table_profil_panw_3_arithmos").text(profil_panw_3_arithmos);
            $(".timi_profil_panw_3").text(profil_price_panw_3.toFixed(2));
        }
        else{
            $(".profil_panw_3_show_hide").css("display","none");
        }
        if (profil_price_katw_1 != 0){
            $(".profil_katw_1_show_hide").css("display","table-row");
            $(".table_profil_katw_1").text(profil_katw_1);
            $(".table_profil_katw_1_arithmos").text(profil_katw_1_arithmos);
            $(".timi_profil_katw_1").text(profil_price_katw_1.toFixed(2));
        }
        else{
            $(".profil_katw_1_show_hide").css("display","none");
        }
        if (profil_price_katw_2 != 0){
            $(".profil_katw_2_show_hide").css("display","table-row");
            $(".table_profil_katw_2").text(profil_katw_2);
            $(".table_profil_katw_2_arithmos").text(profil_katw_2_arithmos);
            $(".timi_profil_katw_2").text(profil_price_katw_2.toFixed(2));
        }
        else{
            $(".profil_katw_2_show_hide").css("display","none");
        }
        if (profil_price_katw_3 != 0){
            $(".profil_katw_3_show_hide").css("display","table-row");
            $(".table_profil_katw_3").text(profil_katw_3);
            $(".table_profil_katw_3_arithmos").text(profil_katw_3_arithmos);
            $(".timi_profil_katw_3").text(profil_price_katw_3.toFixed(2));
        }
        else{
            $(".profil_katw_3_show_hide").css("display","none");
        }
        if (typos_price_katw_1 != 0){
            $(".typos_katw_1_show_hide").css("display","table-row");
            $(".table_typos_katw_1").text(typos_katw_1);
            $(".table_typos_katw_1_arithmos").text(typos_katw_1_arithmos);
            $(".timi_typos_katw_1").text(typos_price_katw_1.toFixed(2));
        }
        else{
            $(".typos_katw_1_show_hide").css("display","none");
        }
        if (typos_price_katw_2 != 0){
            $(".typos_katw_2_show_hide").css("display","table-row");
            $(".table_typos_katw_2").text(typos_katw_2);
            $(".table_typos_katw_2_arithmos").text(typos_katw_2_arithmos);
            $(".timi_typos_katw_2").text(typos_price_katw_2.toFixed(2));
        }
        else{
            $(".typos_katw_2_show_hide").css("display","none");
        }
        if (typos_price_katw_3 != 0){
            $(".typos_katw_3_show_hide").css("display","table-row");
            $(".table_typos_katw_3").text(typos_katw_3);
            $(".table_typos_katw_3_arithmos").text(typos_katw_3_arithmos);
            $(".timi_typos_katw_3").text(typos_price_katw_3.toFixed(2));
        }
        else{
            $(".typos_katw_3_show_hide").css("display","none");
        }
        
        if (odoigos_timi != 0){
            $(".odoigos_show_hide").css("display","table-row");
            $(".table_odoigos").text(odoigos_name);
            $(".timi_odoigos").text(odoigos_timi.toFixed(2));
        }
        else{
            $(".odoigos_show_hide").css("display","none");
        }

        //alert(arxiki_timi);
      },
      error: function(data) { 
      }
    });//end ejax


   }// end times_jason


  /* Επανάληψη παραγγελίας */

  function ksana(){

    var cat_tzami_id = 3;
    var cat_odoigos_id = 2;
    var cat_epik_id = 0;
    var cat_ekso_id = 2;
    
    //Κατηγοριες
    //ΤΖΑΜΙ
    $( "label:contains('Einbruch Sicherheitsgläser')" ).click();
    //ΟΔΟΙΓΟΣ
    $( "label:contains('Rolladenführung 42mm L+R')" ).click();
    //ΡΟΛΑ
    if ( cat_epik_id !== 0 ){
      $( "label:contains('CLASSIC')" ).click();
    }else{
      $( "label:contains('INTERMO')" ).click();
    }
    //ΠΕΡΣΙΔΕΣ
    $( "label:contains('ROLLLADENPANZER PVC 52')" ).click();
    //ΠΡΟΦΙΛ
    $( "label:contains('Stahlrohr 40mm x 45mm')" ).click();
    //ΤΥΠΟΣ
    //$( "label:contains('Transportschutz 30mm Regenerat für Alufensterbänke')" ).click();

     setTimeout(function(){
       //tzami
       $( "label:contains('24mm ESG 4mm aussen')" ).click();
       //rola
       if ( cat_epik_id !== 0 ){
         $( "label:contains('CLASSIC PSK135 Bautiefe 162mm')" ).click();
         //$( ".color_epikathimenou #Nußbaum21)" ).click();
       }else{
         $( "label:contains('INTERMO SK137')" ).click();
       }
       //odoigoi
       var color_odoigou = "Montana63";
       $('.color_odoigou #'+color_odoigou+'').click();
       //persides
       var color_persidas = "white";
       $('.color_persidas #'+color_persidas+'').click();
       //profils
       $('.blurd').val("1");
       $('.blura').val("1");
       $('.blurp').val("1");
       $('.blurk').val("1");
     },1000);

     setTimeout(function(){
        var color_rolou = "Golden-Oak51";
        if ( cat_epik_id !== 0 ){
         $( '.color_epikathimenou #'+color_rolou+'').click();
       }else{
         $( '.color_eksoterikou #'+color_rolou+'').click();
       }
     },2000);

     setTimeout(function(){
       //tupos
       var color_typou = "AluxDB70337";
       $('.color_typos #'+color_typou+'').click();
     },3000);

     setTimeout(function(){
       $('.blurd').blur();
     },4000);

     setTimeout(function(){
       var color_deksia = "AluxDB70337";
       $('.color_merias #'+color_deksia+'').click();
     },6000);

     setTimeout(function(){
       $('.blura').blur();
     },8000);

     setTimeout(function(){
       var color_aristera = "AluxDB70337";
       $('.color_merias #'+color_aristera+'').click();
     },10000);

     setTimeout(function(){
       $('.blurp').blur();
     },12000);

     setTimeout(function(){
       var color_panw = "AluxDB70337";
       $('.color_merias #'+color_panw+'').click();
     },14000);

     setTimeout(function(){
       $('.blurk').blur();
     },16000);

     setTimeout(function(){
       var color_katw = "AluxDB70337";
       $('.color_merias #'+color_katw+'').click();
     },18000);

     

  }



  $(function() {
    // Set this variable with the desired height
    var offsetPixels = 180; 


    $(window).scroll(function() {

        
        var bot_s = $('.scroll').position().top+$('.scroll').outerHeight(true);
        var bot_r = $('.row').position().top+$('.row').outerHeight(true);

    

        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 50){
            $('.scroll').addClass('fixed_button');
            $('.scroll').removeClass('fixed_top');
            /*
            $( ".scroll" ).css({
                "position": "fixed",
                "bottom": "75px"
            });
            */
        }
        else if ($(window).scrollTop() > offsetPixels){
            //alert("sd");
            $('.scroll').removeClass("fixed_button");
            $('.scroll').addClass("fixed_top");

            //$('.kati').removeClass("fixed_button");
            $('.kati').addClass("telies_etsi");
            /*
            $( ".scroll" ).css({
                "position": "fixed",
                "top": "5px"
            });
            */
        } else {
            $('.scroll').removeClass("fixed_button");
            $('.scroll').removeClass('fixed_top');
            $('.kati').removeClass("telies_etsi");
        }
        
        
    });
});







  //$(document).ready(function(){
  //Αρχικά κρηβω πάντα τις λίστες
  //$(".ul").hide();
  //$(".table").hide();

  //Όταν κανω hover σε mouse και απο css κανει rotate
  //$( ".menu" ).mouseenter(function() {
  //  $(".ul").fadeToggle(1000);
  //  $(".table").fadeToggle(1000);
  //});
  //});

  //Εξω απο το ready με το click
  function toggle() {
    $(".ul").fadeToggle(1000);
    $(".table").fadeToggle(1000);
  }

  function toggle2() {
    $(".ul").fadeToggle(1000);
    $(".table").fadeToggle(1000);
  }


;
