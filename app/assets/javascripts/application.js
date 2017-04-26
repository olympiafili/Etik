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
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require translation_center/inspector
//= canvasutilities
//= alert
//= canvaslayers
//= require jquery.turbolinks
//= require_tree .

  
  //Δεν χρεισημοποιητε
  function popover_open(){
    //Ενεργοποιω τα popovers
    $(".bstooltip").popover({trigger: 'manual'});
    
    $( ".bstooltip" ).mouseover(function() {
      $(this).popover('show');
    });

    $( ".bstooltip" ).mouseout(function(){
      $(".popover").remove(); //.popover('hide');
    });
  }

  // This function runs every time the user scrolls the page.
  $(window).scroll(function(){
    $("#home_right").fadeIn("slow");
    // Check weather the user has scrolled down (if "scrollTop()"" is more than 0)
    if($(window).scrollTop() > 630){
   
      // If it's more than or equal to 0, show the toTop button.
      //$("#home_right").fadeIn("slow");
    }
    else {
      // If it's less than 0 (at the top), hide the toTop button.
      //$("#home_right").fadeOut("slow");
   
    }
  });

  // When the user clicks the toTop button, we want the page to scroll to the top.
  $("#home_right").mouseup(function(){
    var target = $(".navbar-default");
    if (target.length) {
      $('html,body').animate({
                    scrollTop: target.offset().top
      }, 1000);
    }
  });
 
  //Δεν χρεισημοποιητε
  function kata_click(){
    $("#myForm").scrollTo("#oti_nane", 1000); //custom animation speed
  }
/*
  //Γενικα να πηγαινω κατω με mouse up και οχι με click
  $(".kataskevastes_katw").mouseup(function(){
    //$("#myForm").scrollTo(".systems", 1000); //custom animation speed
    $("#material_3").click();
  });

  $(".systems_katw").mouseup(function(){
    //$("#myForm").scrollTo(".lines", 1000); //custom animation speed
    $("#material_4").click();
  });

  $(".lines_katw").mouseup(function(){
    //$("#myForm").scrollTo("#pane_xrwma", 1000); //custom animation speed
    $("#tab_color").click();
  });

  $(".xrwmata_mesa_new").mouseup(function(){
    $("#color_2").click();
  });

  $(".xrwmata_eksw_new").mouseup(function(){
    $("#tab_leaf").click();
  });

  $(".m_e").mouseup(function(){
    $("#myForm").scrollTo(".xrwma_katw", 1000); //custom animation speed
  });

  $(".xrwma_katw").mouseup(function(){
    //$("#myForm").scrollTo("#pane_fillo", 1000); //custom animation speed
    //$("#color_2").click();
  });

  $(".fillo_katw").mouseup(function(){
    //$("#myForm").scrollTo("#pane_open_tipos", 1000); //custom animation speed
    $("#tab_open_type").click();
  });

  $(".open_tipos_katw").mouseup(function(){
    //$("#myForm").scrollTo("#pane_diastaseis", 1000); //custom animation speed
    $("#tab_dimensions").click();
    $("#width").focus();
  });
*/


  $(".label_profil").mouseup(function(){
    $(".hide_extra").scrollTo("#pane_profil_scroll", 200); //custom animation speed
  });
 /*
  jQuery.fn.scrollTo = function(elem, speed) { 
      $(this).animate({
          scrollTop:  $(this).scrollTop() - $(this).offset().top + $(elem).offset().top 
      }, speed == undefined ? 1000 : speed); 
      return this; 
  };
  */


  //Πηγαινω κατω και ελεγχω αν ειναι ολα οκ με τις διαστασεις
  //αν το γενικο οκ ειναι true τοτε εχω πατησει διαστασεις και ολα καλα, αλλιως πρεπει να πατησω διαστασεις.
  function pane_katw_extra(pou_na_paei){
    if ( geniko_ok ){
      $(".hide_extra").show();
      $("#myForm").hide();

      var target = $(pou_na_paei);
      $(".hide_extra").scrollTo(pou_na_paei, 1000); //custom animation speed
    }
    else{
      $(".alert_geniko_ok").show();
      $("#myForm").scrollTo("#pane_diastaseis", 1000); //custom animation speed
    }
  }

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
    
    $( "#deksia" ).css("background-color","#d9eaed");
    $( "#deksia" ).css("color","black");
     
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
   
    $( "#aristera" ).css("background-color","#d9eaed");
    $( "#aristera" ).css("color","black");  

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
    
    $( "#panw" ).css("background-color","#d9eaed");
    $( "#panw" ).css("color","black");
     
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
    
    $( "#katw" ).css("background-color","#d9eaed");
    $( "#katw" ).css("color","black");
     
  }

  function ypsos_a(a){
    ypsos = a;
  }

  function mikos_a(a){
    mikos = a;
  }

  
  /////// Υπολογισμος json ////////
  //Ajax για αρχικη τιμη
  function times_json(open_type_name,width,height,line_name,mesa_eksw,color_name,new_width,new_height,epikathimeno_rolo,eksoteriko_rolo,persida,tzami,profil_deksia,profil_aristera,profil_panw,profil_katw,input_deksia,input_panw,input_katw,input_aristera,typos,color_typos,odoigos,color_deksia,color_aristera,color_panw,color_katw,color_fulou,lastixo,profil_deksia_1,profil_deksia_1_arithmos,profil_deksia_2,profil_deksia_2_arithmos,profil_deksia_3,profil_deksia_3_arithmos,profil_aristera_1,profil_aristera_1_arithmos,profil_aristera_2,profil_aristera_2_arithmos,profil_aristera_3,profil_aristera_3_arithmos,profil_panw_1,profil_panw_1_arithmos,profil_panw_2,profil_panw_2_arithmos,profil_panw_3,profil_panw_3_arithmos,profil_katw_1,profil_katw_1_arithmos,profil_katw_2,profil_katw_2_arithmos,profil_katw_3,profil_katw_3_arithmos,typos_katw_1,typos_katw_1_arithmos,typos_katw_2,typos_katw_2_arithmos,typos_katw_3,typos_katw_3_arithmos,prostasia,tzami2,lastixo,pl_rol_ep,up_rol_ep,pl_rol_ek,up_rol_ek,pl_persidas,up_persidas,up_odoigou,color_epikathimenou,color_eksoterikou,color_persidas,color_odoigou,color_profil_katw,color_profil_deksia,color_profil_aristera,color_profil_panw, elegxos_w, elegxos_h,xwrisma1,xwrisma2,xwrisma_y_1,xwrisma_y_2,xwrisma3_1,xwrisma3_2,xwrisma3_3,color_eksw_name,tzami0,xwrisma4_1,xwrisma4_2,xwrisma4_3,xwrisma4_4,window_still_single,roll_rat,roll_rlt,roll_rdm,roll_pss,roll_pfm, place, rat_quantity){
    
    $.ajax({
      async: false,
      type:'GET',
      url:'/etic/price.json',
      dataType: "json",
      data: { open_type_name: open_type_name ,
              width: width,
              height: height,
              line_name: line_name,
              mesa_eksw: mesa_eksw,
              color_name: color_name,
              color_eksw_name: color_eksw_name,
              color_deksia: color_deksia,
              color_aristera: color_aristera,
              color_panw: color_panw,
              color_katw: color_katw,
              color_fulou: color_fulou,
              lastixo: lastixo,
              new_width: new_width,
              new_height: new_height,
              xwrisma1: xwrisma1,
              xwrisma2: xwrisma2,
              xwrisma_y_1: xwrisma_y_1,
              xwrisma_y_2: xwrisma_y_2,
              xwrisma3_1: xwrisma3_1,
              xwrisma3_2: xwrisma3_2,
              xwrisma3_3: xwrisma3_3,
              epik_rolo: epikathimeno_rolo,
              ekso_rolo: eksoteriko_rolo,
              persida: persida,
              prostasia: prostasia,
              pl_rol_ep: pl_rol_ep,
              up_rol_ep: up_rol_ep,
              pl_rol_ek: pl_rol_ek,
              up_rol_ek: up_rol_ek,
              pl_persidas: pl_persidas,
              up_persidas: up_persidas,
              up_odoigou: up_odoigou,
              tzamia0: tzami0,
              tzamia: tzami,
              tzamia2: tzami2,
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
              typos_katw_3_arithmos: typos_katw_3_arithmos,
              xrwma_epikathimenou: color_epikathimenou,
              xrwma_eksoterikou: color_eksoterikou,
              color_persidas: color_persidas,
              color_odoigou: color_odoigou,
              color_profil_katw: color_profil_katw,
              color_profil_deksia: color_profil_deksia,
              color_profil_aristera: color_profil_aristera,
              color_profil_panw: color_profil_panw,
              elegxos_w: elegxos_w,
              elegxos_h: elegxos_h,
              xwrisma4_1: xwrisma4_1,
              xwrisma4_2: xwrisma4_2,
              xwrisma4_3: xwrisma4_3,
	   		  xwrisma4_4: xwrisma4_4,
	  		window_still_single: window_still_single,
		  	roll_rat: roll_rat,
		  	roll_rlt: roll_rlt,
		  	roll_rdm: roll_rdm,
		  	roll_pss: roll_pss,
		  	roll_pfm: roll_pfm,
        place: place,
        rat_quantity: rat_quantity},
      success: function(data) {
        arxiki_timi = parseFloat(data.arxiki_timi);
        super_apli_timi = parseFloat(data.super_apli_timi);
        teliki_timi = parseFloat(data.teliki_timi);
        nea_timi = parseFloat(data.nea_timi);
        ep_mesa_gia_pinaka = parseFloat(data.ep_mesa_gia_pinaka);
        ep_eksw_gia_pinaka = parseFloat(data.ep_eksw_gia_pinaka);
        ep_mesa_p = parseFloat(data.ep_mesa_p);
        ep_eksw_p = parseFloat(data.ep_eksw_p);
        tm_tz_0 = parseFloat(data.tm_tz_0);
        tm_tz_1 = parseFloat(data.tm_tz_1);
        tm_tz_2 = parseFloat(data.tm_tz_2);
        tm_od = parseFloat(data.tm_od);
        tm_per = parseFloat(data.tm_per);
        tm_ep = parseFloat(data.tm_ep);
        tm_ek = parseFloat(data.tm_ek);
        tm_u_pd1 = parseFloat(data.tm_u_pd1)/1000;
        tm_u_pd2 = parseFloat(data.tm_u_pd2)/1000;
        tm_u_pd3 = parseFloat(data.tm_u_pd3)/1000;
        tm_u_pa1 = parseFloat(data.tm_u_pa1)/1000;
        tm_u_pa2 = parseFloat(data.tm_u_pa2)/1000;
        tm_u_pa3 = parseFloat(data.tm_u_pa3)/1000;
        tm_p_pp1 = parseFloat(data.tm_p_pp1)/1000;
        tm_p_pp2 = parseFloat(data.tm_p_pp2)/1000;
        tm_p_pp3 = parseFloat(data.tm_p_pp3)/1000;
        tm_p_pk1 = parseFloat(data.tm_p_pk1)/1000;
        tm_p_pk2 = parseFloat(data.tm_p_pk2)/1000;
        tm_p_pk3 = parseFloat(data.tm_p_pk3)/1000;
        tm_p_t1 = parseFloat(data.tm_p_t1)/1000;
        epikathimeno_rolo = data.epikathimeno;
        color_epikathimenou = data.color_epikathimenou
        timi_epikathimenou = data.timi_epikathimenou;
        eksoteriko_rolo = data.eksoteriko;
        color_eksoterikou = data.color_eksoterikou;
        timi_eksoterikou = data.ekso_rolo_price;
        pl_rol_ek = data.pl_rol_ek;
        up_rol_ek = data.up_rol_ek;
        pl_rol_ep =data.pl_rol_ep;
        up_rol_ep = data.up_rol_ep;
        pl_persidas = data.pl_persidas;
        up_persidas = data.up_persidas;
        up_odoigou = data.up_odoigou;
        persida = data.persida_name;
        color_persidas = data.col_persidas;
        persida_price = data.persida_price;
        prostasia_name = data.prostasia_name;
        prostasia_timi = data.prostasia_timi;
        window_still_name = data.window_still_name;
        window_still_timi = data.window_still_timi;

        place_name = data.place_name;
        place_timi = data.place_timi;
		
        roll_rat_name = data.roll_rat_name;
        roll_rat_timi = data.roll_rat_timi;
        roll_rlt_name = data.roll_rlt_name;
        roll_rlt_timi = data.roll_rlt_timi;
        roll_rdm_name = data.roll_rdm_name;
        roll_rdm_timi = data.roll_rdm_timi;
        roll_pss_name = data.roll_pss_name;
        roll_pss_timi = data.roll_pss_timi;
        roll_pfm_name = data.roll_pfm_name;
        roll_pfm_timi = data.roll_pfm_timi;
		
        lastixo_name = data.lastixo;
        lastixo_price = data.lastixo_price;
        tzami0_name = data.tzami0;
        tzami0_timi = data.tzami0_timi;
        tzami_name = data.tzami;
        tzami_timi = data.tzami_timi;
        tzami2_name = data.tzami2;
        tzami2_timi = data.tzami2_timi;
        profil_name = data.profil_name;
        //profil_price = data.profil_price;
        color_profil_katw = data.color_profil_katw;
        color_profil_deksia = data.color_profil_deksia;
        color_profil_aristera = data.color_profil_aristera;
        color_profil_panw = data.color_profil_panw;
        typos_name = data.typos_name;
        typos_color = data.typos_color;
        typos_price = data.typos_price;
        odoigos_name = data.odoigos_name;
        color_odoigou = data.color_odoigou;
        odoigos_timi = data.odoigos_timi;
        profil_deksia_1 = data.profil_name_deksia_1;
        profil_deksia_1_code = data.profil_name_deksia_1_code;
        profil_deksia_1_arithmos = data.profil_posotita_deksia_1;
        profil_price_deksia_1 = data.profil_price_deksia_1;
        profil_deksia_2 = data.profil_name_deksia_2;
        profil_deksia_2_code = data.profil_name_deksia_2_code;
        profil_deksia_2_arithmos = data.profil_posotita_deksia_2;
        profil_price_deksia_2 = data.profil_price_deksia_2;
        profil_deksia_3 = data.profil_name_deksia_3;
        profil_deksia_3_code = data.profil_name_deksia_3_code;
        profil_deksia_3_arithmos = data.profil_posotita_deksia_3;
        profil_price_deksia_3 = data.profil_price_deksia_3;
        profil_aristera_1 = data.profil_name_aristera_1;
        profil_aristera_1_code = data.profil_name_aristera_1_code;
        profil_aristera_1_arithmos = data.profil_posotita_aristera_1;
        profil_price_aristera_1 = data.profil_price_aristera_1;
        profil_aristera_2 = data.profil_name_aristera_2;
        profil_aristera_2_code = data.profil_name_aristera_2_code;
        profil_aristera_2_arithmos = data.profil_posotita_aristera_2;
        profil_price_aristera_2 = data.profil_price_aristera_2;
        profil_aristera_3 = data.profil_name_aristera_3;
        profil_aristera_3_code = data.profil_name_aristera_3_code;
        profil_aristera_3_arithmos = data.profil_posotita_aristera_3;
        profil_price_aristera_3 = data.profil_price_aristera_3;
        profil_panw_1 = data.profil_name_panw_1;
        profil_panw_1_code = data.profil_name_panw_1_code;
        profil_panw_1_arithmos = data.profil_posotita_panw_1;
        profil_price_panw_1 = data.profil_price_panw_1;
        profil_panw_2 = data.profil_name_panw_2;
        profil_panw_2_code = data.profil_name_panw_2_code;
        profil_panw_2_arithmos = data.profil_posotita_panw_2;
        profil_price_panw_2 = data.profil_price_panw_2;
        profil_panw_3 = data.profil_name_panw_3;
        profil_panw_3_code = data.profil_name_panw_3_code;
        profil_panw_3_arithmos = data.profil_posotita_panw_3;
        profil_price_panw_3 = data.profil_price_panw_3;
        profil_katw_1 = data.profil_name_katw_1;
        profil_katw_1_code = data.profil_name_katw_1_code;
        profil_katw_1_arithmos = data.profil_posotita_katw_1;
        profil_price_katw_1 = data.profil_price_katw_1;
        profil_katw_2 = data.profil_name_katw_2;
        profil_katw_2_code = data.profil_name_katw_2_code;
        profil_katw_2_arithmos = data.profil_posotita_katw_2;
        profil_price_katw_2 = data.profil_price_katw_2;
        profil_katw_3 = data.profil_name_katw_3;
        profil_katw_3_code = data.profil_name_katw_3_code;
        profil_katw_3_arithmos = data.profil_posotita_katw_3;
        profil_price_katw_3 = data.profil_price_katw_3;
        typos_katw_1 = data.typos_name_katw_1;
        typos_katw_1_code = data.typos_name_katw_1_code;
        typos_katw_1_arithmos = data.typos_posotita_katw_1;
        typos_price_katw_1 = data.typos_price_katw_1;
        typos_katw_2 = data.typos_name_katw_2;
        typos_katw_2_code = data.typos_name_katw_2_code;
        typos_katw_2_arithmos = data.typos_posotita_katw_2;
        typos_price_katw_2 = data.typos_price_katw_2;
        typos_katw_3 = data.typos_name_katw_3;
        typos_katw_3_code = data.typos_name_katw_3_code;
        typos_katw_3_arithmos = data.typos_posotita_katw_3;
        typos_price_katw_3 = data.typos_price_katw_3;
        height_mesa_meta_apo_typo = data.height_mesa_meta_apo_typo;
        odoigos_val = data.odoigos_val;
        mikos_eksw = data.mikos_eksw;
        epik_val_width = data.epik_val_width;
        epik_val_height = data.epik_val_height;
        ekso_val_width = data.ekso_val_width;
        ekso_val_height = data.ekso_val_height; 
        persida_val_width = data.persida_val_width;
        persida_val_height = data.persida_val_height;
        nea_timi_market = data.market_price;
        nea_timi_dealer = data.dealer_price;
        pososto_market = data.pososto_market;
        pososto_dealer = data.pososto_dealer;

        // Αλλαγες σε πινακακι //
        $(".super_apli_timi").text(super_apli_timi.toFixed(2).replace(".", ",")+" €");
        $(".arxiki_timi").text(arxiki_timi.toFixed(2).replace(".", ",")+" €");

        $(".teliki_timi_market").text((teliki_timi - pososto_market * teliki_timi).toFixed(2).replace(".", ",")+" €");
        $(".teliki_timi_dealer").text((teliki_timi - pososto_dealer * teliki_timi).toFixed(2).replace(".", ",")+" €");
        $(".teliki_timi").text(teliki_timi.toFixed(2).replace(".", ",")+" €");
        $(".nea_timi").text(nea_timi.toFixed(2).replace(".", ",")+"€");

        //Market and Dealer Price
        $(".nea_timi_market").text(nea_timi_market.toFixed(2).replace(".", ",")+" €");
        $(".nea_timi_dealer").text(nea_timi_dealer.toFixed(2).replace(".", ",")+" €");
        
        $(".ep_mesa").text(ep_mesa_gia_pinaka.toFixed(2).replace(".", ",")+" €");
        $(".ep_eksw").text(ep_eksw_gia_pinaka.toFixed(2).replace(".", ",")+" €");
        $(".ep_mesa_p").text(ep_mesa_p+" %");
        $(".ep_eksw_p").text(ep_eksw_p+" %");
        $(".tm_tz_0").empty();
        $(".tm_tz_0").append( ( tm_tz_0 ).toFixed(2)+" <p>m"+"2".sup()+"</p>" );
        $(".tm_tz_1").empty();
        $(".tm_tz_1").append( ( tm_tz_1 ).toFixed(2)+" <p>m"+"2".sup()+"</p>" );
        $(".tm_tz_2").empty();
        $(".tm_tz_2").append( ( tm_tz_2 ).toFixed(2)+" <p>m"+"2".sup()+"</p>" );
        $(".tm_ep").empty();
        $(".tm_ep").append( ( tm_ep ).toFixed(2)+" <p>m"+"2".sup()+"</p>" );
        $(".tm_ek").empty();
        $(".tm_ek").append( ( tm_ek ).toFixed(2)+" <p>m"+"2".sup()+"</p>" );
        $(".tm_per").empty();
        $(".tm_per").append( ( tm_per ).toFixed(2)+" <p>m"+"2".sup()+"</p>" );
        $(".tm_od").empty();
        $(".tm_od").append( ( tm_od ).toFixed(2)+" <p>m"+"</p>" );
        if (timi_epikathimenou != 0){
            $(".timi_market_epikathimenou").text((timi_epikathimenou - pososto_market * timi_epikathimenou).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_epikathimenou").text((timi_epikathimenou - pososto_dealer * timi_epikathimenou).toFixed(2).replace(".", ",")+" €");
            $(".epik_show_hide").css("display","table-row");
            $(".table_epikathimeno").text(epikathimeno_rolo);
            $(".timi_epikathimenou").text(timi_epikathimenou.toFixed(2).replace(".", ",")+" €");
            $(".table_xrwma_epikathimeno").text(color_epikathimenou);
            $(".table_timi_xrwma_epikathimenou").text("0"+" €");
            $(".kanoniko_platos_epikathimenou").text(mikos_eksw);
            $(".kanoniko_upsos_epikathimenou").text(height);//text(height_mesa_meta_apo_typo);
            $('.pl_rol_ep').val(epik_val_width);
            $('.up_rol_ep').val(epik_val_height);
        }
        else{
            $(".epik_show_hide").css("display","none");
        }
        if (timi_eksoterikou != 0){
            $(".timi_market_eksoterikou").text((timi_eksoterikou - pososto_market * timi_eksoterikou).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_eksoterikou").text((timi_eksoterikou - pososto_dealer * timi_eksoterikou).toFixed(2).replace(".", ",")+" €");
            $(".ekso_show_hide").css("display","table-row");
            $(".table_eksoteriko").text(eksoteriko_rolo);
            $(".timi_eksoterikou").text(timi_eksoterikou.toFixed(2).replace(".", ",")+" €");
            $(".table_xrwma_eksoteriko").text(color_eksoterikou);
            $(".table_timi_xrwma_eksoterikou").text("0"+" €");
            $(".kanoniko_platos_eksoterikou").text(mikos_eksw);
            $(".kanoniko_upsos_eksoterikou").text(height);//text(height_mesa_meta_apo_typo);
            $('.pl_rol_ek').val(ekso_val_width);
            $('.up_rol_ek').val(ekso_val_height);
        }
        else{
            $(".ekso_show_hide").css("display","none");
        }
        if (persida_price != 0){
            $(".timi_market_persida").text((persida_price - pososto_market * persida_price).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_persida").text((persida_price - pososto_dealer * persida_price).toFixed(2).replace(".", ",")+" €");
            $(".persida_show_hide").css("display","table-row");
            $(".table_persida").text(persida);
            $(".timi_persida").text(persida_price.toFixed(2).replace(".", ",")+" €");
            $(".table_xrwma_persida").text(color_persidas);
            $(".table_timi_xrwma_persida").text("0"+" €");
            $(".kanoniko_platos_persidas").text(mikos_eksw);
            $(".kanoniko_upsos_persidas").text(height);//text(height_mesa_meta_apo_typo);
            $('.pl_persidas').val(persida_val_width);
            $('.up_persidas').val(persida_val_height);
        }
        else{
            $(".persida_show_hide").css("display","none");
        }
        if (lastixo_name !== "0"){
            $(".lastixo_show_hide").css("display","table-row");
            if ( lastixo_name === "mauro_lastixo"){
              //$(".table_lastixo").text("<%= t 'translate.black_gasket'%>");
              $(".table_lastixo_black").show();
              $(".table_lastixo_grey").hide();
            }else{
              //$(".table_lastixo").text("<%= t 'translate.grey_gasket'%>");
              $(".table_lastixo_black").hide();
              $(".table_lastixo_grey").show();
            }

            $(".timi_market_lastixo").text((lastixo_price - pososto_market * lastixo_price).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_lastixo").text((lastixo_price - pososto_dealer * lastixo_price).toFixed(2).replace(".", ",")+" €");
            $(".timi_lastixo").text(lastixo_price.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".lastixo_show_hide").css("display","none");
        }
        if (true/*tzami0_timi != 0*/){
            $(".tzami0_show_hide").css("display","table-row");
            $(".table_tzami0").text(tzami0_name);
            $(".timi_tzami0").text(tzami0_timi.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".tzami_show_hide").css("display","none");
        }
        if (tzami_name != ""){
            $(".tzami_show_hide").css("display","table-row");
            $(".table_tzami").text(tzami_name);
            $(".timi_tzami").text(tzami_timi.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".tzami_show_hide").css("display","none");
        }
        if (tzami2_name != ""){
            $(".tzami2_show_hide").css("display","table-row");
            $(".table_tzami2").text(tzami2_name);
            $(".timi_tzami2").text(tzami2_timi.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".tzami2_show_hide").css("display","none");
        }
        if (prostasia_timi != 0){
            $(".timi_market_prostasia").text((prostasia_timi - pososto_market * prostasia_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_prostasia").text((prostasia_timi - pososto_dealer * prostasia_timi).toFixed(2).replace(".", ",")+" €");
            $(".prostasia_show_hide").css("display","table-row");
            $(".table_prostasia").text(prostasia_name);
            $(".timi_prostasia").text(prostasia_timi.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".prostasia_show_hide").css("display","none");
        }
		
        if (window_still_timi != 0){
            $(".timi_market_window_still").text((window_still_timi - pososto_market * window_still_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_window_still").text((window_still_timi - pososto_dealer * window_still_timi).toFixed(2).replace(".", ",")+" €");
            $(".window_still_show_hide").css("display","table-row");
            $(".table_window_still").text(window_still_name);
            $(".timi_window_still").text(window_still_timi.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".window_still_show_hide").css("display","none");
        }

        if (place_timi != 0){
            $(".timi_market_place").text((place_timi - pososto_market * place_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_place").text((place_timi - pososto_dealer * place_timi).toFixed(2).replace(".", ",")+" €");
            $(".place_show_hide").css("display","table-row");
            $(".table_place").text(place_name);
            $(".timi_place").text(place_timi.toFixed(2).replace(".", ",")+" €");
        }
        else{
            $(".place_show_hide").css("display","none");
        }
		
        if (roll_rat_timi != 0){
            $(".timi_market_roll_rat").text((roll_rat_timi - pososto_market * roll_rat_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_roll_rat").text((roll_rat_timi - pososto_dealer * roll_rat_timi).toFixed(2).replace(".", ",")+" €");
            $(".roll_rat_show_hide").css("display","table-row");
            $(".table_roll_rat").text(roll_rat_name);
            $(".timi_roll_rat").text(roll_rat_timi.toFixed(2).replace(".", ",")+" €");
        }
        else
            $(".roll_rat_show_hide").css("display","none");
		
        if (roll_rlt_timi != 0){
            $(".timi_market_roll_rlt").text((roll_rlt_timi - pososto_market * roll_rlt_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_roll_rlt").text((roll_rlt_timi - pososto_dealer * roll_rlt_timi).toFixed(2).replace(".", ",")+" €");
            $(".roll_rlt_show_hide").css("display","table-row");
            $(".table_roll_rlt").text(roll_rlt_name);
            $(".timi_roll_rlt").text(roll_rlt_timi.toFixed(2).replace(".", ",")+" €");
        }
        else
            $(".roll_rlt_show_hide").css("display","none");
		
        if (roll_rdm_timi != 0){
            $(".timi_market_roll_rdm").text((roll_rdm_timi - pososto_market * roll_rdm_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_roll_rdm").text((roll_rdm_timi - pososto_dealer * roll_rdm_timi).toFixed(2).replace(".", ",")+" €");
            $(".roll_rdm_show_hide").css("display","table-row");
            $(".table_roll_rdm").text(roll_rdm_name);
            $(".timi_roll_rdm").text(roll_rdm_timi.toFixed(2).replace(".", ",")+" €");
        }
        else
            $(".roll_rdm_show_hide").css("display","none");
		
        if (roll_pss_timi != 0){
            $(".timi_market_roll_pss").text((roll_pss_timi - pososto_market * roll_pss_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_roll_pss").text((roll_pss_timi - pososto_dealer * roll_pss_timi).toFixed(2).replace(".", ",")+" €");
            $(".roll_pss_show_hide").css("display","table-row");
            $(".table_roll_pss").text(roll_pss_name);
            $(".timi_roll_pss").text(roll_pss_timi.toFixed(2).replace(".", ",")+" €");
        }
        else
            $(".roll_pss_show_hide").css("display","none");
		
        if (roll_pfm_timi != 0){
            $(".timi_market_roll_pfm").text((roll_pfm_timi - pososto_market * roll_pfm_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_roll_pfm").text((roll_pfm_timi - pososto_dealer * roll_pfm_timi).toFixed(2).replace(".", ",")+" €");
            $(".roll_pfm_show_hide").css("display","table-row");
            $(".table_roll_pfm").text(roll_pfm_name);
            $(".timi_roll_pfm").text(roll_pfm_timi.toFixed(2).replace(".", ",")+" €");
        }
        else
            $(".roll_pfm_show_hide").css("display","none");
		
        if (profil_price_deksia_1 != 0){
            $(".timi_market_profil_deksia_1").text((profil_price_deksia_1 - pososto_market * profil_price_deksia_1).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_deksia_1").text((profil_price_deksia_1 - pososto_dealer * profil_price_deksia_1).toFixed(2).replace(".", ",")+" €");
            $(".profil_deksia_1_show_hide").css("display","table-row");
            $(".table_profil_deksia_1").text(profil_deksia_1+", "+profil_deksia_1_code);
            $(".table_profil_deksia_1_arithmos").empty();
            $(".table_profil_deksia_1_arithmos").append( profil_deksia_1_arithmos+" -- "+( tm_u_pd1 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_deksia_1_arithmos").text(profil_deksia_1_arithmos);
            $(".timi_profil_deksia_1").text(profil_price_deksia_1.toFixed(2).replace(".", ",")+" €");
            $(".profil_deksia_xrwma_show_hide").css("display","table-row");
            $(".table_profil_deksia_xrwma").text(color_profil_deksia);
            $(".timi_profil_deksia_xrwma").text("0"+" €");
        }
        else{
            $(".profil_deksia_1_show_hide").css("display","none");
        }
        if (profil_price_deksia_2 != 0){
            $(".timi_market_profil_deksia_2").text((profil_price_deksia_2 - pososto_market * profil_price_deksia_2).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_deksia_2").text((profil_price_deksia_2 - pososto_dealer * profil_price_deksia_2).toFixed(2).replace(".", ",")+" €");
            $(".profil_deksia_2_show_hide").css("display","table-row");
            $(".table_profil_deksia_2").text(profil_deksia_2+", "+profil_deksia_2_code);
            $(".table_profil_deksia_2_arithmos").empty();
            $(".table_profil_deksia_2_arithmos").append( profil_deksia_2_arithmos+" -- "+( tm_u_pd2 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_deksia_2_arithmos").text(profil_deksia_2_arithmos);
            $(".timi_profil_deksia_2").text(profil_price_deksia_2.toFixed(2).replace(".", ",")+" €");
            $(".profil_deksia_xrwma_show_hide").css("display","table-row");
            $(".table_profil_deksia_xrwma").text(color_profil_deksia);
            $(".timi_profil_deksia_xrwma").text("0"+" €");
        }
        else{
            $(".profil_deksia_2_show_hide").css("display","none");
        }
        if (profil_price_deksia_3 != 0){
            $(".timi_market_profil_deksia_3").text((profil_price_deksia_3 - pososto_market * profil_price_deksia_3).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_deksia_3").text((profil_price_deksia_3 - pososto_dealer * profil_price_deksia_3).toFixed(2).replace(".", ",")+" €");
            $(".profil_deksia_3_show_hide").css("display","table-row");
            $(".table_profil_deksia_3").text(profil_deksia_3+", "+profil_deksia_3_code);
            $(".table_profil_deksia_3_arithmos").empty();
            $(".table_profil_deksia_3_arithmos").append( profil_deksia_3_arithmos+" -- "+( tm_u_pd3 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_deksia_3_arithmos").text(profil_deksia_3_arithmos);
            $(".timi_profil_deksia_3").text(profil_price_deksia_3.toFixed(2).replace(".", ",")+" €");
            $(".profil_deksia_xrwma_show_hide").css("display","table-row");
            $(".table_profil_deksia_xrwma").text(color_profil_deksia);
            $(".timi_profil_deksia_xrwma").text("0"+" €");
        }
        else{
            $(".profil_deksia_3_show_hide").css("display","none");
        }
        if (profil_price_aristera_1 != 0){
            $(".timi_market_profil_aristera_1").text((profil_price_aristera_1 - pososto_market * profil_price_aristera_1).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_aristera_1").text((profil_price_aristera_1 - pososto_dealer * profil_price_aristera_1).toFixed(2).replace(".", ",")+" €");
            $(".profil_aristera_1_show_hide").css("display","table-row");
            $(".table_profil_aristera_1").text(profil_aristera_1+", "+profil_aristera_1_code);
            $(".table_profil_aristera_1_arithmos").empty();
            $(".table_profil_aristera_1_arithmos").append( profil_aristera_1_arithmos+" -- "+( tm_u_pa1 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_aristera_1_arithmos").text(profil_aristera_1_arithmos);
            $(".timi_profil_aristera_1").text(profil_price_aristera_1.toFixed(2).replace(".", ",")+" €");
            $(".profil_aristera_xrwma_show_hide").css("display","table-row");
            $(".table_profil_aristera_xrwma").text(color_profil_aristera);
            $(".timi_profil_aristera_xrwma").text("0"+" €");
        }
        else{
            $(".profil_aristera_1_show_hide").css("display","none");
        }
        if (profil_price_aristera_2 != 0){
            $(".timi_market_profil_aristera_2").text((profil_price_aristera_2 - pososto_market * profil_price_aristera_2).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_aristera_2").text((profil_price_aristera_2 - pososto_dealer * profil_price_aristera_2).toFixed(2).replace(".", ",")+" €");
            $(".profil_aristera_2_show_hide").css("display","table-row");
            $(".table_profil_aristera_2").text(profil_aristera_2+", "+profil_aristera_2_code);
            $(".table_profil_aristera_2_arithmos").empty();
            $(".table_profil_aristera_2_arithmos").append( profil_aristera_2_arithmos+" -- "+( tm_u_pa2 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_aristera_2_arithmos").text(profil_aristera_2_arithmos);
            $(".timi_profil_aristera_2").text(profil_price_aristera_2.toFixed(2).replace(".", ",")+" €");
            $(".profil_aristera_xrwma_show_hide").css("display","table-row");
            $(".table_profil_aristera_xrwma").text(color_profil_aristera);
            $(".timi_profil_aristera_xrwma").text("0"+" €");
        }
        else{
            $(".profil_aristera_2_show_hide").css("display","none");
        }
        if (profil_price_aristera_3 != 0){
            $(".timi_market_profil_aristera_3").text((profil_price_aristera_3 - pososto_market * profil_price_aristera_3).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_aristera_3").text((profil_price_aristera_3 - pososto_dealer * profil_price_aristera_3).toFixed(2).replace(".", ",")+" €");
            $(".profil_aristera_3_show_hide").css("display","table-row");
            $(".table_profil_aristera_3").text(profil_aristera_3+", "+profil_aristera_3_code);
            $(".table_profil_aristera_3_arithmos").empty();
            $(".table_profil_aristera_3_arithmos").append( profil_aristera_3_arithmos+" -- "+( tm_u_pa3 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_aristera_3_arithmos").text(profil_aristera_3_arithmos);
            $(".timi_profil_aristera_3").text(profil_price_aristera_3.toFixed(2).replace(".", ",")+" €");
            $(".profil_aristera_xrwma_show_hide").css("display","table-row");
            $(".table_profil_aristera_xrwma").text(color_profil_aristera);
            $(".timi_profil_aristera_xrwma").text("0"+" €");
        }
        else{
            $(".profil_aristera_3_show_hide").css("display","none");
        }
        if (profil_price_panw_1 != 0){
            $(".timi_market_profil_panw_1").text((profil_price_panw_1 - pososto_market * profil_price_panw_1).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_panw_1").text((profil_price_panw_1 - pososto_dealer * profil_price_panw_1).toFixed(2).replace(".", ",")+" €");
            $(".profil_panw_1_show_hide").css("display","table-row");
            $(".table_profil_panw_1").text(profil_panw_1+", "+profil_panw_1_code);
            $(".table_profil_panw_1_arithmos").empty();
            $(".table_profil_panw_1_arithmos").append( profil_panw_1_arithmos+" -- "+( tm_p_pp1 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_panw_1_arithmos").text(profil_panw_1_arithmos);
            $(".timi_profil_panw_1").text(profil_price_panw_1.toFixed(2).replace(".", ",")+" €");
            $(".profil_panw_xrwma_show_hide").css("display","table-row");
            $(".table_profil_panw_xrwma").text(color_profil_panw);
            $(".timi_profil_panw_xrwma").text("0"+" €");
        }
        else{
            $(".profil_panw_1_show_hide").css("display","none");
        }
        if (profil_price_panw_2 != 0){
            $(".timi_market_profil_panw_2").text((profil_price_panw_2 - pososto_market * profil_price_panw_2).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_panw_2").text((profil_price_panw_2 - pososto_dealer * profil_price_panw_2).toFixed(2).replace(".", ",")+" €");
            $(".profil_panw_2_show_hide").css("display","table-row");
            $(".table_profil_panw_2").text(profil_panw_2+", "+profil_panw_2_code);
            $(".table_profil_panw_2_arithmos").empty();
            $(".table_profil_panw_2_arithmos").append( profil_panw_2_arithmos+" -- "+( tm_p_pp2 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_panw_2_arithmos").text(profil_panw_2_arithmos);
            $(".timi_profil_panw_2").text(profil_price_panw_2.toFixed(2).replace(".", ",")+" €");
            $(".profil_panw_xrwma_show_hide").css("display","table-row");
            $(".table_profil_panw_xrwma").text(color_profil_panw);
            $(".timi_profil_panw_xrwma").text("0"+" €");
        }
        else{
            $(".profil_panw_2_show_hide").css("display","none");
        }
        if (profil_price_panw_3 != 0){
            $(".timi_market_profil_panw_3").text((profil_price_panw_3 - pososto_market * profil_price_panw_3).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_panw_3").text((profil_price_panw_3 - pososto_dealer * profil_price_panw_3).toFixed(2).replace(".", ",")+" €");
            $(".profil_panw_3_show_hide").css("display","table-row");
            $(".table_profil_panw_3").text(profil_panw_3+", "+profil_panw_3_code);
            $(".table_profil_panw_3_arithmos").empty();
            $(".table_profil_panw_3_arithmos").append( profil_panw_3_arithmos+" -- "+( tm_p_pp3 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_panw_3_arithmos").text(profil_panw_3_arithmos);
            $(".timi_profil_panw_3").text(profil_price_panw_3.toFixed(2).replace(".", ",")+" €");
            $(".profil_panw_xrwma_show_hide").css("display","table-row");
            $(".table_profil_panw_xrwma").text(color_profil_panw);
            $(".timi_profil_panw_xrwma").text("0"+" €");
        }
        else{
            $(".profil_panw_3_show_hide").css("display","none");
        }
        if (profil_price_katw_1 != 0){
            $(".timi_market_profil_katw_1").text((profil_price_katw_1 - pososto_market * profil_price_katw_1).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_katw_1").text((profil_price_katw_1 - pososto_dealer * profil_price_katw_1).toFixed(2).replace(".", ",")+" €");
            $(".profil_katw_1_show_hide").css("display","table-row");
            $(".table_profil_katw_1").text(profil_katw_1+", "+profil_katw_1_code);
            $(".table_profil_katw_1_arithmos").empty();
            $(".table_profil_katw_1_arithmos").append( profil_katw_1_arithmos+" -- "+( tm_p_pk1 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_katw_1_arithmos").text(profil_katw_1_arithmos);
            $(".timi_profil_katw_1").text(profil_price_katw_1.toFixed(2).replace(".", ",")+" €");
            $(".profil_katw_xrwma_show_hide").css("display","table-row");
            $(".table_profil_katw_xrwma").text(color_profil_katw);
            $(".timi_profil_katw_xrwma").text("0"+" €");
        }
        else{
            $(".profil_katw_1_show_hide").css("display","none");
        }
        if (profil_price_katw_2 != 0){
            $(".timi_market_profil_katw_2").text((profil_price_katw_2 - pososto_market * profil_price_katw_2).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_katw_2").text((profil_price_katw_2 - pososto_dealer * profil_price_katw_2).toFixed(2).replace(".", ",")+" €");
            $(".profil_katw_2_show_hide").css("display","table-row");
            $(".table_profil_katw_2").text(profil_katw_2+", "+profil_katw_2_code);
            $(".table_profil_katw_2_arithmos").empty();
            $(".table_profil_katw_2_arithmos").append( profil_katw_2_arithmos+" -- "+( tm_p_pk2 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_katw_2_arithmos").text(profil_katw_2_arithmos);
            $(".timi_profil_katw_2").text(profil_price_katw_2.toFixed(2).replace(".", ",")+" €");
            $(".profil_katw_xrwma_show_hide").css("display","table-row");
            $(".table_profil_katw_xrwma").text(color_profil_katw);
            $(".timi_profil_katw_xrwma").text("0"+" €");
        }
        else{
            $(".profil_katw_2_show_hide").css("display","none");
        }
        if (profil_price_katw_3 != 0){
            $(".timi_market_profil_katw_3").text((profil_price_katw_3 - pososto_market * profil_price_katw_3).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_profil_katw_3").text((profil_price_katw_3 - pososto_dealer * profil_price_katw_3).toFixed(2).replace(".", ",")+" €");
            $(".profil_katw_3_show_hide").css("display","table-row");
            $(".table_profil_katw_3").text(profil_katw_3+", "+profil_katw_3_code);
            $(".table_profil_katw_3_arithmos").empty();
            $(".table_profil_katw_3_arithmos").append( profil_katw_3_arithmos+" -- "+( tm_p_pk3 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_profil_katw_3_arithmos").text(profil_katw_3_arithmos);
            $(".timi_profil_katw_3").text(profil_price_katw_3.toFixed(2).replace(".", ",")+" €");
            $(".profil_katw_xrwma_show_hide").css("display","table-row");
            $(".table_profil_katw_xrwma").text(color_profil_katw);
            $(".timi_profil_katw_xrwma").text("0"+" €");
        }
        else{
            $(".profil_katw_3_show_hide").css("display","none");
        }
        if ( (profil_price_katw_1 == 0) && (profil_price_katw_2 == 0) && (profil_price_katw_3 == 0)  ){
            $(".profil_katw_xrwma_show_hide").css("display","none");
        }
        if ( (profil_price_panw_1 == 0) && (profil_price_panw_2 == 0) && (profil_price_panw_3 == 0)  ){
            $(".profil_panw_xrwma_show_hide").css("display","none");
        }
        if ( (profil_price_deksia_1 == 0) && (profil_price_deksia_2 == 0) && (profil_price_deksia_3 == 0)  ){
            $(".profil_deksia_xrwma_show_hide").css("display","none");
        }
        if ( (profil_price_aristera_1 == 0) && (profil_price_aristera_2 == 0) && (profil_price_aristera_3 == 0)  ){
            $(".profil_aristera_xrwma_show_hide").css("display","none");
        }
        if (typos_price_katw_1 != 0){
            $(".timi_market_typos_katw_1").text((typos_price_katw_1 - pososto_market * typos_price_katw_1).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_typos_katw_1").text((typos_price_katw_1 - pososto_dealer * typos_price_katw_1).toFixed(2).replace(".", ",")+" €");
            $(".typos_katw_1_show_hide").css("display","table-row");
            $(".table_typos_katw_1").text(typos_katw_1 +", "+ typos_katw_1_code);
            $(".table_typos_katw_1_arithmos").empty();
            $(".table_typos_katw_1_arithmos").append( typos_katw_1_arithmos+" -- "+( tm_p_t1 ).toFixed(2)+" <p>m"+"</p>" );
            //$(".table_typos_katw_1_arithmos").text(typos_katw_1_arithmos);
            $(".timi_typos_katw_1").text(typos_price_katw_1.toFixed(2).replace(".", ",")+" €");
            $(".profil_typos_xrwma_show_hide").css("display","table-row");
            $(".table_profil_typos_xrwma").text(color_profil_katw);
            $(".timi_profil_typos_xrwma").text("0"+" €");
        }
        else{
            $(".typos_katw_1_show_hide").css("display","none");
        }
        if (typos_price_katw_2 != 0){
            $(".timi_market_typos_katw_2").text((typos_price_katw_2 - pososto_market * typos_price_katw_2).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_typos_katw_2").text((typos_price_katw_2 - pososto_dealer * typos_price_katw_2).toFixed(2).replace(".", ",")+" €");
            $(".typos_katw_2_show_hide").css("display","table-row");
            $(".table_typos_katw_2").text(typos_katw_2 +", "+ typos_katw_2_code);
            $(".table_typos_katw_2_arithmos").text(typos_katw_2_arithmos);
            $(".timi_typos_katw_2").text(typos_price_katw_2.toFixed(2).replace(".", ",")+" €");
            $(".profil_typos_xrwma_show_hide").css("display","table-row");
            $(".table_profil_typos_xrwma").text(color_profil_katw);
            $(".timi_profil_typos_xrwma").text("0"+" €");
        }
        else{
            $(".typos_katw_2_show_hide").css("display","none");
        }
        if (typos_price_katw_3 != 0){
            $(".timi_market_typos_katw_3").text((typos_price_katw_3 - pososto_market * typos_price_katw_3).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_typos_katw_3").text((typos_price_katw_3 - pososto_dealer * typos_price_katw_3).toFixed(2).replace(".", ",")+" €");
            $(".typos_katw_3_show_hide").css("display","table-row");
            $(".table_typos_katw_3").text(typos_katw_3 +", "+ typos_katw_3_code);
            $(".table_typos_katw_3_arithmos").text(typos_katw_3_arithmos);
            $(".timi_typos_katw_3").text(typos_price_katw_3.toFixed(2).replace(".", ",")+" €");
            $(".profil_typos_xrwma_show_hide").css("display","table-row");
            $(".table_profil_typos_xrwma").text(color_profil_katw);
            $(".timi_profil_typos_xrwma").text("0"+" €");
        }
        else{
            $(".typos_katw_3_show_hide").css("display","none");
        }
        
        if (odoigos_name != "" /*odoigos_timi != 0*/){
            $(".timi_market_odoigos").text((odoigos_timi - pososto_market * odoigos_timi).toFixed(2).replace(".", ",")+" €");
            $(".timi_dealer_odoigos").text((odoigos_timi - pososto_dealer * odoigos_timi).toFixed(2).replace(".", ",")+" €");
            $(".odoigos_show_hide").css("display","table-row");
            $(".table_odoigos").text(odoigos_name);
            $(".timi_odoigos").text(odoigos_timi.toFixed(2).replace(".", ",")+" €");
            $(".table_xrwma_odoigos").text(color_odoigou);
            if(odoigos_name == "Führungsschiene nur wenn sich Masse ändern L/R" || odoigos_name == "H-Schiene Rollo mittig nur wenn sich Masse ändern") {
              $(".table_timi_xrwma_odoigos").text("0" +" €");
              $(".timi_market_xrwma_odoigos").text("0" +" €");
              $(".timi_dealer_xrwma_odoigos").text("0" +" €");
            } else {
              timi_guide_xrwma = ( tm_od ).toFixed(2)*20;
              $(".table_timi_xrwma_odoigos").text(timi_guide_xrwma +" €");
              $(".timi_market_xrwma_odoigos").text((timi_guide_xrwma - pososto_market * timi_guide_xrwma).toFixed(2).replace(".", ",") +" €");
              $(".timi_dealer_xrwma_odoigos").text((timi_guide_xrwma - pososto_dealer * timi_guide_xrwma).toFixed(2).replace(".", ",") +" €");
              
            }
            
            $(".kanonika_metra_odoigou").text(height_mesa_meta_apo_typo);
            $(".up_odoigou").val(odoigos_val); 
        }
        else{
            $(".odoigos_show_hide").css("display","none");
        }
        

      },
      error: function(data) { 
      }
    });//end ejax
   }// end times_jason

  function ajaxEksoterika(eksoteriko_cat) {
    // NOTE:  This function must return the value 
    //        from calling the $.ajax() method.
    return $.ajax({
      async: false,
            type:'GET',
            url:'/etic/eksoterika',
            dataType: "json",
            data: { eksoteriko_cat: eksoteriko_cat },
            success: function(data) {
              var header2 = "<h5><%= t 'extra.rola' %>: "+eksoteriko_cat_text+"</h5>" 
              $(header2).appendTo(".eksoterika_rola");
                    $.each(data, function(i, item) { //Για κάθε data που παίρνω κανω τα παρακάτο 
                        //alert(item.name);
                        //return $(".kataskevastes").html(item.name);
                        //$( "<p>item.name</p>" ).appendTo( ".kataskevastes" );
                        var div_data = "<label class=eksoterika_rola_polla id="+item.id+">"+item.name+"</label>";
                        $(div_data).appendTo(".eksoterika_rola");
                      })

                    if ( YES_ROLLA_EK == true ){
                      $(".eksoterika_rola_polla").each(function( index ) {
                        if( $( this ).attr("id") == "<%= @rolo_id %>" ){
                          $( this ).trigger('click');
                        }
                      });
                      YES_ROLLA_EK_YPO = true;
                      YES_ROLLA_EK = false;
                    }

                    if ( META_YES_ROLLA_EK == true ){
                       $(".eksoterika_rola_polla").each(function( index ) {
                          if( $( this ).attr("id") == rolo_id ){
                            $( this ).trigger('click');
                          }
                        });
                      META_YES_ROLLA_EK_YPO = true;
                      META_YES_ROLLA_EK = false;
                    }
                  },
                  error: function(data) { 
                  }
                });//end ejax
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
      $(".eswteriko_kasas").css("z-index","2");
      $(".eswteriko_kasas").css("left",aristera_mesa_kasa+"px");
      $(".eswteriko_kasas").css("top", apostasei_gia_katw_kasa_apo_panw + panw_kasa );
      $(".eswteriko_kasas").css("width",width - de_ty - ar_ty);
      $(".eswteriko_kasas").css("height",height - pa_ty - ka_ty);
      $(".eswteriko_kasas").attr('width', (width - de_ty - ar_ty));
      $(".eswteriko_kasas").attr('height', (height - pa_ty - ka_ty));
      $(".eswteriko_kasas").css("border","solid");
      $(".eswteriko_kasas").css("border-width","1px"); 
      //$(".eswteriko_kasas").css("background-color","#5EAFD2");
      

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
      if ( ( pinakas_kath[key].class_1 == poio_einai ) || ( pinakas_kath[key].class_2 == poio_einai ) ){
        diagrafi_xwrismatwn(2,key);
      }
    }
  }else{
    for(var key in pinakas_ori) {
      if ( ( pinakas_ori[key].class_1 == poio_einai ) || ( pinakas_ori[key].class_2 == poio_einai ) ){
        diagrafi_xwrismatwn(1,key);
      }
    }

  }
}

  function vres_poio_kontino(offset,upsos,ori_kath,min_etsi){

    //min = 9999999999;
    $('.click').each(function(){                                                                                                                            
      var $this = $(this);  

      if ( ori_kath == "1" ){
        var apotelesma =  (parseInt(offset) - $this.offset().left) ;
        var apotelesma_2 =  (parseInt(upsos) - $this.offset().top) ;
        if ( (parseInt(apotelesma) < 0) && (parseInt(apotelesma_2) > 0) && (Math.abs(apotelesma_2) < parseInt(min_etsi)) ){
          //alert("!!");
          min_etsi = Math.abs(apotelesma_2);
          element = $(this);

          
        }

        
         /*
        }
        if ( ( apotelesma > 0 ) && ( Math.floor($this.offset().left) == Math.floor(x) ) ){
          class_tet = $(this).attr('class');
          class_tet_kali = (class_tet.split(' ')[0]);
          width_tetragwnou = $("."+class_tet_kali).outerWidth();
          height_tetragnwnou = $("."+class_tet_kali).outerHeight();
          apostasi_tet_apo_panw = $("."+class_tet_kali).offset().top;
          apostasti_tet_apo_aristera = $("."+class_tet_kali).offset().left;
          min = apotelesma;
        }
        */
      }else{
        var apotelesma = Math.abs( (parseInt(x) - $this.offset().left) );
        if ( ( apotelesma > 0 ) && ( Math.floor($this.offset().top) == Math.floor(y) ) ){
          class_tet = $(this).attr('class');
          class_tet_kali = (class_tet.split(' ')[0]);
          width_tetragwnou = $("."+class_tet_kali).outerWidth();
          height_tetragnwnou = $("."+class_tet_kali).outerHeight();
          apostasi_tet_apo_panw = $("."+class_tet_kali).offset().top;
          apostasti_tet_apo_aristera = $("."+class_tet_kali).offset().left;
          min = apotelesma;
        }
      }
      
    });

     return element; //.attr("class").split(' ')[0];

    

  }
  
  function vres_poio_kontino_kath(offset,mikos,ori_kath,min_etsi){

    //min = 9999999999;
    $('.clack').each(function(){                                                                                                                            
      var $this = $(this);  

      if ( ori_kath == "1" ){
        var apotelesma =  (parseInt(offset) - $this.offset().top) ;
        var apotelesma_2 =  (parseInt(mikos) - $this.offset().left) ;
        if ( (parseInt(apotelesma) < 0) && (parseInt(apotelesma_2) > 0) && (Math.abs(apotelesma_2) < parseInt(min_etsi)) ){
          min_etsi = Math.abs(apotelesma_2);
          element = $(this);
        }

        
         /*
        }
        if ( ( apotelesma > 0 ) && ( Math.floor($this.offset().left) == Math.floor(x) ) ){
          class_tet = $(this).attr('class');
          class_tet_kali = (class_tet.split(' ')[0]);
          width_tetragwnou = $("."+class_tet_kali).outerWidth();
          height_tetragnwnou = $("."+class_tet_kali).outerHeight();
          apostasi_tet_apo_panw = $("."+class_tet_kali).offset().top;
          apostasti_tet_apo_aristera = $("."+class_tet_kali).offset().left;
          min = apotelesma;
        }
        */
      }else{
        var apotelesma = Math.abs( (parseInt(x) - $this.offset().left) );
        if ( ( apotelesma > 0 ) && ( Math.floor($this.offset().top) == Math.floor(y) ) ){
          class_tet = $(this).attr('class');
          class_tet_kali = (class_tet.split(' ')[0]);
          width_tetragwnou = $("."+class_tet_kali).outerWidth();
          height_tetragnwnou = $("."+class_tet_kali).outerHeight();
          apostasi_tet_apo_panw = $("."+class_tet_kali).offset().top;
          apostasti_tet_apo_aristera = $("."+class_tet_kali).offset().left;
          min = apotelesma;
        }
      }
      
    });

     return element; //.attr("class").split(' ')[0];

  }

  function kane_tetragwna(a, b, apostasi, x, y, athrisma, ori_kath, width_kasas,epanalipsi_kouf){

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
    }else{
      var c = parseInt(x) - parseInt(width_zo) + 10
    }

    var min = 9999999999;
    $('.tetragwno').each(function(){                                                                                                                            
      var $this = $(this);  
      if ( ori_kath == "1" ){
        var apotelesma =  (parseInt(y) - $this.offset().top) ;
        if ( ( apotelesma > 0 ) && ( Math.floor($this.offset().left) == Math.floor(x) ) && ( apotelesma < min ) ){
          class_tet = $(this).attr('class');
          class_tet_kali = (class_tet.split(' ')[0]);
          width_tetragwnou = $("."+class_tet_kali).outerWidth();
          height_tetragnwnou = $("."+class_tet_kali).outerHeight();
          apostasi_tet_apo_panw = $("."+class_tet_kali).offset().top;
          apostasti_tet_apo_aristera = $("."+class_tet_kali).offset().left;
          min = apotelesma;
        }
      }else{
        var apotelesma = Math.abs( (parseInt(x) - $this.offset().left) );
        if ( ( apotelesma > 0 ) && ( Math.floor($this.offset().top) == Math.floor(y) ) && ( apotelesma < min ) ){
          class_tet = $(this).attr('class');
          class_tet_kali = (class_tet.split(' ')[0]);
          width_tetragwnou = $("."+class_tet_kali).outerWidth();
          height_tetragnwnou = $("."+class_tet_kali).outerHeight();
          apostasi_tet_apo_panw = $("."+class_tet_kali).offset().top;
          apostasti_tet_apo_aristera = $("."+class_tet_kali).offset().left;
          min = apotelesma;
        }
      }
      
    });

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
      $("."+athrisma).attr('width', width_tetragwnou);
      $("."+athrisma).attr('height', (y - apostasi_tet_apo_panw));
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
      $("."+pros).attr('width', width_tetragwnou);
      $("."+pros).attr('height', (apostasi_tet_apo_panw + height_tetragnwnou - y - width_kasas));
      $("."+pros).css("z-index","2");
      //$("."+pros).css("background-color","red");
      $("."+pros).css("border","solid");
      $("."+pros).css("border-width","1px");

      var canvas_kouf = $("."+athrisma);
      var class_canvas_kouf = canvas_kouf.attr('class');
      if ( ($(".mple_"+athrisma).length) && (epanalipsi_kouf == "1")){
        var b = $(".mple_"+athrisma).attr('class').split(' ')[1];
        var c = $(".mple_"+athrisma).attr('class').split(' ')[2];
        var d = $(".mple_"+athrisma).attr('class').split(' ')[3];

        $(".mple_"+athrisma).remove();
        $(".mple2_"+athrisma).remove();
        var canvas_kouf = $("."+athrisma)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);

        kane_koufwmata(athrisma, b, c, d);

        //Gia meta apo diagrafei xwrismatos
        //$(".mple_"+pros).show();
        //$(".mple2_"+pros).show();
        //$(".mple_"+athrisma).show();
        //$(".mple2_"+athrisma).show();
      }
      if ( ($(".mple_"+pros).length) && (epanalipsi_kouf == "1")){

        var canvas_kouf = $("."+pros);
        var class_canvas_kouf = canvas_kouf.attr('class');
        var b = $(".mple_"+pros).attr('class').split(' ')[1];
        var c = $(".mple_"+pros).attr('class').split(' ')[2];
        var d = $(".mple_"+pros).attr('class').split(' ')[3];

        $(".mple_"+pros).remove();
        $(".mple2_"+pros).remove();
        var canvas_kouf = $("."+pros)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);

        kane_koufwmata(pros, b, c, d);

        //Gia meta apo diagrafei xwrismatos
        //$(".mple_"+pros).show();
        //$(".mple2_"+pros).show();
        //$(".mple_"+athrisma).show();
        //$(".mple2_"+athrisma).show();
      }
  
    }else{
      $("."+athrisma).css("position","absolute");
      $("."+athrisma).css("left",apostasti_tet_apo_aristera+"px");
      $("."+athrisma).css("top", apostasi_tet_apo_panw+"px");
      $("."+athrisma).css("width",x - apostasti_tet_apo_aristera+"px");
      $("."+athrisma).css("height",height_tetragnwnou +"px");
      $("."+athrisma).attr('width', (x - apostasti_tet_apo_aristera));
      $("."+athrisma).attr('height', height_tetragnwnou);
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
      $("."+pros).attr('width', (apostasti_tet_apo_aristera + width_tetragwnou - x - width_kasas));
      $("."+pros).attr('height', height_tetragnwnou);
      $("."+pros).css("z-index","2");
      //$("."+pros).css("background-color","red");
      $("."+pros).css("border","solid");
      $("."+pros).css("border-width","1px");

      if ( ($(".mple_"+athrisma).length) && (epanalipsi_kouf == "1")){
        var b = $(".mple_"+athrisma).attr('class').split(' ')[1];
        var c = $(".mple_"+athrisma).attr('class').split(' ')[2];
        var d = $(".mple_"+athrisma).attr('class').split(' ')[3];

        $(".mple_"+athrisma).remove();
        $(".mple2_"+athrisma).remove();
        var canvas_kouf = $("."+athrisma)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);

        kane_koufwmata(athrisma, b, c, d);


        //Gia meta apo diagrafei xwrismatos
        //$(".mple_"+pros).show();
        //$(".mple2_"+pros).show();
        //$(".mple_"+athrisma).show();
        //$(".mple2_"+athrisma).show();
      }
      if ( ($(".mple_"+pros).length) && (epanalipsi_kouf == "1")){

        var canvas_kouf = $("."+pros);
        var class_canvas_kouf = canvas_kouf.attr('class');
        var b = $(".mple_"+pros).attr('class').split(' ')[1];
        var c = $(".mple_"+pros).attr('class').split(' ')[2];
        var d = $(".mple_"+pros).attr('class').split(' ')[3];

        $(".mple_"+pros).remove();
        $(".mple2_"+pros).remove();
        var canvas_kouf = $("."+pros)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);

        kane_koufwmata(pros, b, c, d);

        //Gia meta apo diagrafei xwrismatos
        //$(".mple_"+pros).show();
        //$(".mple2_"+pros).show();
        //$(".mple_"+athrisma).show();
        //$(".mple2_"+athrisma).show();
      }
    }

  }


  function kane_koufwmata(a, b, posa_hor, posa_ver){

    var canvas_kouf = $("."+a);
    var class_canvas_kouf = canvas_kouf.attr('class');
    $(".mple_"+a).remove();
    $(".mple2_"+a).remove();
    $(".elements_nea").append("<div class='mple_"+a+" "+b+" "+posa_hor+" "+posa_ver+"'></div>");
    $(".elements_nea").append("<div class='mple2_"+a+" "+b+" "+posa_hor+" "+posa_ver+"'></div>");
    //$(".elements_nea").append("<hr class=diagwnios1_"+a+">");
    //$(".elements_nea").append("<hr class=diagwnios2_"+a+">");
    //$(".elements_nea").append("<hr class=diagwnios3_"+a+">");
    //$(".elements_nea").append("<hr class=diagwnios4_"+a+">");

      if ( b === "kouf_1" ){
        var canvas_kouf = $("."+a)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);
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
        $(".mple2_"+a).css("left",$("."+class_canvas_kouf.split(' ')[0]).offset().left+ 6 +"px");
        $(".mple2_"+a).css("top", $("."+class_canvas_kouf.split(' ')[0]).offset().top+ 6 +"px");
        $(".mple2_"+a).css("width",$("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12 +"px");
        $(".mple2_"+a).css("height",$("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12 +"px");
        $(".mple2_"+a).css("z-index","1");
        $(".mple2_"+a).css("background-color","#5EAFD2");
        $(".mple2_"+a).css("border","solid");
        $(".mple2_"+a).css("border-width","1px");

        if ( posa_hor != undefined ){
          if ( posa_hor == "hor_1" ){
            ctx.beginPath();
            ctx.moveTo(6,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 6,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 6,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2)+3);
            ctx.lineTo(6,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_hor == "hor_2" ){
            ctx.beginPath();
            ctx.moveTo(6,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 6,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 6,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2/2)+3);
            ctx.lineTo(6,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(6,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2/2)-1)*3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 6,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2/2)-1)*3));
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 6,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2/2)+1)*3));
            ctx.lineTo(6,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6)/2/2)+1)*3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
        if ( posa_ver != undefined ){
          if ( posa_ver == "ver_1" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,6);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,6);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_ver == "ver_2" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,6);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,6);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,6);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,6);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6));
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 6));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
      }else{
        var canvas_kouf = $("."+a)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);
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

        if ( posa_hor != undefined ){
          if ( posa_hor == "hor_1" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_hor == "hor_2" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3));
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3));
            ctx.lineTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
        if ( posa_ver != undefined ){
          if ( posa_ver == "ver_1" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_ver == "ver_2" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
      }
      if ( b === "kouf_diagrafi" ){
        $(".mple_"+a).remove();
        $(".mple2_"+a).remove();
        var canvas_kouf = $("."+a)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);
      }
      if ( b === "kouf_4" ){
        var canvas_kouf = $("."+a)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);

        ctx.beginPath();
        ctx.moveTo(12,12);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2);
        ctx.lineTo(12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
        ctx.lineTo(($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12)/2,12);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,$("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 10,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-14);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-2,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-14);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-2,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+4);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 10,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+4);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 8,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-10);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-10);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+12);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 8,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+12);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)-8);
        ctx.lineTo(4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)-8);
        ctx.lineTo(4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)+8);
        ctx.lineTo(0,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)+8);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        var mesi_dia_dio_gia_ment = ((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)*3;
        ctx.moveTo(0,mesi_dia_dio_gia_ment-8);
        ctx.lineTo(4,mesi_dia_dio_gia_ment-8);
        ctx.lineTo(4,mesi_dia_dio_gia_ment+8);
        ctx.lineTo(0,mesi_dia_dio_gia_ment+8);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();      

        if ( posa_hor != undefined ){
          if ( posa_hor == "hor_1" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_hor == "hor_2" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3));
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3));
            ctx.lineTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
        if ( posa_ver != undefined ){
          if ( posa_ver == "ver_1" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_ver == "ver_2" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
      }
      if ( b === "kouf_6" ){
        var canvas_kouf = $("."+a)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);

        ctx.beginPath();
        ctx.moveTo(12,12);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2);
        ctx.lineTo(12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
        //ctx.lineTo(($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12)/2,12);
        //ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,$("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 10,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-14);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-2,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-14);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-2,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+4);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 10,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+4);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 8,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-10);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-10);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+12);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 8,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+12);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)-8);
        ctx.lineTo(4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)-8);
        ctx.lineTo(4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)+8);
        ctx.lineTo(0,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)+8);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        var mesi_dia_dio_gia_ment = ((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)*3;
        ctx.moveTo(0,mesi_dia_dio_gia_ment-8);
        ctx.lineTo(4,mesi_dia_dio_gia_ment-8);
        ctx.lineTo(4,mesi_dia_dio_gia_ment+8);
        ctx.lineTo(0,mesi_dia_dio_gia_ment+8);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();    

        if ( posa_hor != undefined ){
          if ( posa_hor == "hor_1" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_hor == "hor_2" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3));
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3));
            ctx.lineTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
        if ( posa_ver != undefined ){
          if ( posa_ver == "ver_1" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_ver == "ver_2" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }

      }
      if ( b === "kouf_3" ){
        var canvas_kouf = $("."+a)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);

        ctx.beginPath();
        ctx.moveTo(12,12);
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2);
        ctx.moveTo(12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
        ctx.lineTo(($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12)/2,12);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,$("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-14 ,2);
        ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-14,10);
        ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+4,10);
        ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+4,2);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-10 ,4);
        ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-10,8);
        ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+12,8);
        ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+12,4);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-8,$("."+class_canvas_kouf.split(' ')[0]).outerHeight() );
        ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-8,$("."+class_canvas_kouf.split(' ')[0]).outerHeight()-4 );
        ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+8,$("."+class_canvas_kouf.split(' ')[0]).outerHeight()-4 );
        ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+8,$("."+class_canvas_kouf.split(' ')[0]).outerHeight() );
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        var mesi_dia_dio_gia_ment = ((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)*3;
        ctx.moveTo(mesi_dia_dio_gia_ment-8,$("."+class_canvas_kouf.split(' ')[0]).outerHeight());
        ctx.lineTo(mesi_dia_dio_gia_ment-8,$("."+class_canvas_kouf.split(' ')[0]).outerHeight()-4);
        ctx.lineTo(mesi_dia_dio_gia_ment+8,$("."+class_canvas_kouf.split(' ')[0]).outerHeight()-4);
        ctx.lineTo(mesi_dia_dio_gia_ment+8,$("."+class_canvas_kouf.split(' ')[0]).outerHeight());
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();    

        if ( posa_hor != undefined ){
          if ( posa_hor == "hor_1" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_hor == "hor_2" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3));
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3));
            ctx.lineTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
        if ( posa_ver != undefined ){
          if ( posa_ver == "ver_1" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_ver == "ver_2" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
      }
      if ( b === "kouf_5" ){
        var canvas_kouf = $("."+a)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);

        ctx.beginPath();
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,12);
        ctx.lineTo(12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
        ctx.lineTo(($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12)/2,12);
        ctx.lineTo(12,$("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(2 ,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-14);
        ctx.lineTo(10,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-14);
        ctx.lineTo(10,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+4);
        ctx.lineTo(2,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+4);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-10);
        ctx.lineTo(8,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-10);
        ctx.lineTo(8,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+12);
        ctx.lineTo(4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+12);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth(),((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)-8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)-8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)+8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth(),((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)+8);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        var mesi_dia_dio_gia_ment = ((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)*3;
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth(),mesi_dia_dio_gia_ment-8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,mesi_dia_dio_gia_ment-8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,mesi_dia_dio_gia_ment+8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth(),mesi_dia_dio_gia_ment+8);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill(); 

        if ( posa_hor != undefined ){
          if ( posa_hor == "hor_1" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_hor == "hor_2" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3));
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3));
            ctx.lineTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
        if ( posa_ver != undefined ){
          if ( posa_ver == "ver_1" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_ver == "ver_2" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
      }
      if ( b === "kouf_7" ){
        var canvas_kouf = $("."+a)[0];
        var ctx = canvas_kouf.getContext("2d");
        ctx.clearRect(0, 0, canvas_kouf.width, canvas_kouf.height);

        ctx.beginPath();
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,12);
        ctx.lineTo(12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
        //ctx.lineTo(($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12)/2,12);
        //ctx.lineTo(12,$("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(2 ,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-14);
        ctx.lineTo(10,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-14);
        ctx.lineTo(10,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+4);
        ctx.lineTo(2,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+4);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-10);
        ctx.lineTo(8,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))-10);
        ctx.lineTo(8,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+12);
        ctx.lineTo(4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2))+12);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth(),((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)-8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)-8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)+8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth(),((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)+8);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill();

        ctx.beginPath();
        var mesi_dia_dio_gia_ment = ((($("."+class_canvas_kouf.split(' ')[0]).outerHeight())/2)/2)*3;
        ctx.moveTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth(),mesi_dia_dio_gia_ment-8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,mesi_dia_dio_gia_ment-8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()-4,mesi_dia_dio_gia_ment+8);
        ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth(),mesi_dia_dio_gia_ment+8);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle="gray";
        ctx.fill(); 

        if ( posa_hor != undefined ){
          if ( posa_hor == "hor_1" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_hor == "hor_2" ){
            ctx.beginPath();
            ctx.moveTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.lineTo(12,(($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3);
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)-1)*3));
            ctx.lineTo($("."+class_canvas_kouf.split(' ')[0]).outerWidth()- 12,(((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3));
            ctx.lineTo(12,((($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12)/2/2)+1)*3);
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
        if ( posa_ver != undefined ){
          if ( posa_ver == "ver_1" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2))-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }else if( posa_ver == "ver_2" ){
            ctx.beginPath();
            ctx.moveTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,12);
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo(((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,12);
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)+1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.lineTo((((($("."+class_canvas_kouf.split(' ')[0]).outerWidth())/2)/2)-1)*3,($("."+class_canvas_kouf.split(' ')[0]).outerHeight()- 12));
            ctx.closePath();
            ctx.stroke();
            ctx.fillStyle="white";
            ctx.fill();
          }
        }
      }
      
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
    c = document.getElementById("canvas_ele");
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

    c = document.getElementById("canvas_ele");
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

    c = document.getElementById("canvas_ele");
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
      $( ".katheto_xwrisma_1" ).css("z-index","3");
    }
    if ( arithmos_kath == "2"){
      $( ".katheto_xwrisma_2" ).css("left",apostasi_apo_aristera + width_zo - 50);
      $( ".katheto_xwrisma_2" ).css("top",parseInt(arxi) + parseInt(width_kasas)+"px" );
      $( ".katheto_xwrisma_2" ).css("width",typos_xwr);
      $( ".katheto_xwrisma_2" ).css("height",height_zo - width_kasas);
      $( ".katheto_xwrisma_2" ).css("border","solid");
      $( ".katheto_xwrisma_2" ).css("border-width","1px");
      $( ".katheto_xwrisma_2" ).css("background-color","white");
      $( ".katheto_xwrisma_2" ).css("z-index","3");
    }
    if ( arithmos_kath == "3"){
      $( ".katheto_xwrisma_3" ).css("left",apostasi_apo_aristera + width_zo - 50);
      $( ".katheto_xwrisma_3" ).css("top",parseInt(arxi) + parseInt(width_kasas)+"px" );
      $( ".katheto_xwrisma_3" ).css("width",typos_xwr);
      $( ".katheto_xwrisma_3" ).css("height",height_zo - width_kasas);
      $( ".katheto_xwrisma_3" ).css("border","solid");
      $( ".katheto_xwrisma_3" ).css("border-width","1px");
      $( ".katheto_xwrisma_3" ).css("background-color","white");
      $( ".katheto_xwrisma_3" ).css("z-index","3");
    }
    if ( arithmos_kath == "4"){
      $( ".katheto_xwrisma_4" ).css("left",apostasi_apo_aristera + width_zo - 50);
      $( ".katheto_xwrisma_4" ).css("top",parseInt(arxi) + parseInt(width_kasas)+"px" );
      $( ".katheto_xwrisma_4" ).css("width",typos_xwr);
      $( ".katheto_xwrisma_4" ).css("height",height_zo - width_kasas);
      $( ".katheto_xwrisma_4" ).css("border","solid");
      $( ".katheto_xwrisma_4" ).css("border-width","1px");
      $( ".katheto_xwrisma_4" ).css("background-color","white");
      $( ".katheto_xwrisma_4" ).css("z-index","3");
    }
    if ( arithmos_kath == "5"){
      $( ".katheto_xwrisma_5" ).css("left",apostasi_apo_aristera + width_zo - 50);
      $( ".katheto_xwrisma_5" ).css("top",parseInt(arxi) + parseInt(width_kasas)+"px" );
      $( ".katheto_xwrisma_5" ).css("width",typos_xwr);
      $( ".katheto_xwrisma_5" ).css("height",height_zo - width_kasas);
      $( ".katheto_xwrisma_5" ).css("border","solid");
      $( ".katheto_xwrisma_5" ).css("border-width","1px");
      $( ".katheto_xwrisma_5" ).css("background-color","white");
      $( ".katheto_xwrisma_5" ).css("z-index","3");
    }
    if ( arithmos_kath == "6"){
      $( ".katheto_xwrisma_6" ).css("left",apostasi_apo_aristera + width_zo - 50);
      $( ".katheto_xwrisma_6" ).css("top",parseInt(arxi) + parseInt(width_kasas)+"px" );
      $( ".katheto_xwrisma_6" ).css("width",typos_xwr);
      $( ".katheto_xwrisma_6" ).css("height",height_zo - width_kasas);
      $( ".katheto_xwrisma_6" ).css("border","solid");
      $( ".katheto_xwrisma_6" ).css("border-width","1px");
      $( ".katheto_xwrisma_6" ).css("background-color","white");
      $( ".katheto_xwrisma_6" ).css("z-index","3");
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
