class Card_Pdf_Customer < Prawn::Document
  include ActionView::Helpers::NumberHelper
  
  def initialize(items, view, user, name, surname, company, address, phone, email, sunolo, epivarinsi, ekptosi, metaforika, teliki)
  	super()
  	@items = items
    @view  = view
    @name = name
    @surname = surname
    @company = company
    @address = address
    @phone = phone
    @email = email
    @sunolo = sunolo
    @epivarinsi = epivarinsi
    @ekptosi = ekptosi
    @metaforika = metaforika
    @teliki = teliki
    font_families.update("DejaVuSans" => {
      :normal => "#{Rails.root}/app/assets/fonts/DejaVuSans.ttf",
      :bold => "#{Rails.root}/app/assets/fonts/DejaVuSans-Bold.ttf"
    })
  	font "DejaVuSans"
  	pinakas_rows
  end

  def price(num)
    unless num.nil?
      @view.number_to_currency(num,:unit=>'', format: "%n %u", separator: ",", :delimiter => '.')
    end
  end

  def total_price
    data_price_panw = [[{:content => "", :height => 0},{:content => "", :height => 0}, {:content => "", :height => 0},{:content => "", :height => 0},{:content => "", :height => 0}]]
    data_price = make_table([ 
                            ["<b>#{I18n.t("translate.Star_price")}:</b>","","","<color rgb='008000'>"+price(@sunolo)+"</color> €"],
                            ["#{I18n.t("translate.Surcharge")}:","","","<color rgb='ff0000'>#{@epivarinsi}</color> %"],
                            ["#{I18n.t("translate.Discount")}:","","","<color rgb='ff0000'>#{@ekptosi}</color> %"],
                            ["#{I18n.t("translate.Transports")}:","","","<color rgb='ff0000'>#{@metaforika}</color> €"],
                            ["<b>#{I18n.t("translate.Final_price")}:</b>","","","<color rgb='ff0000'>"+price(@teliki)+"</color> €"],
              ],:cell_style => {:size => 7, :inline_format => true } )do
                    column(0).width = 210
                    column(1).width = 55
                    column(2).width = 55
                    column(3).width = 55
                    #column(1).align = :right
                    column(3).align = :right
                    cells.padding = 1
                    column(3).padding = 0
                    column(0).borders = []
                    column(1).borders = []
                    column(2).borders = []
                    column(3).borders = [:left]
                end

    data_price_panw += [
            [ "", 
              "", 
              "",
              data_price
            ]
            ]
    move_down 20
    table(data_price_panw, :header => false,
              :cell_style => {:size => 7, :inline_format => true, :borders => []  }#, :borders => [:bottom]
           ) do |table|
          table.column(0).width = 25
          table.column(1).width = 25
          table.column(2).width = 130
          table.column(3).width = 420
          #table.column(4).width = 90
          #table.borders = [:bottom]
      end
    #move_down 30
    #text "Starting price: <color rgb='008000'>"+price(@sunolo)+"</color> €",:size => 12, :inline_format => true, :borders => [:top, :bottom], :align => :right
    #move_down 5
    #text "Ποσοστό επιβάρυνσης: <color rgb='ff0000'>#{@epivarinsi}</color> %",:size => 12, :inline_format => true, :borders => [:top, :bottom], :align => :right
    #move_down 5
    #text "Ποσοστό έκπτωσης: <color rgb='ff0000'>#{@ekptosi}</color> %",:size => 12, :inline_format => true, :borders => [:top, :bottom], :align => :right
    #move_down 5
    #text "Μεταφορικά: <color rgb='ff0000'>#{@metaforika}</color> €",:size => 12, :inline_format => true, :borders => [:top, :bottom], :align => :right
    #move_down 5
    #text "-------------------------------------",:size => 12, :inline_format => true, :borders => [:top, :bottom], :align => :right
    #text "Final price: <color rgb='ff0000'>"+price(@teliki)+"</color> €",:size => 12, :inline_format => true, :borders => [:top, :bottom], :align => :right

  end


  def pinakas_rows
  	bounding_box([bounds.left - 30, bounds.top - 105 ], :width => bounds.width + 70, :height => bounds.height - 130  ) do
  	counter = 0
  	data = [[{:content => "", :height => 0},{:content => "", :height => 0}, {:content => "", :height => 0},{:content => "", :height => 0},{:content => "", :height => 0}]]
  	@items.map do |order| 
  		counter = 0
  		eikona = "#{Rails.root}/public/upload/#{order.canvas}.png"
  		data2 = make_table([
  								["#{I18n.t("translate.Open_category")}: <color rgb='ff0000'>#{I18n.t("kouf."<<order.open_categorie_id)}</color>",""],
  								["#{I18n.t("translate.Material")}: <color rgb='ff0000'>#{order.material_id}</color>",""],
  								["#{I18n.t("translate.Constructor")}: <color rgb='ff0000'>#{order.constructor_id}</color>",""], 
  								["#{I18n.t("translate.System_A")}: <color rgb='ff0000'>#{order.system_id}</color>",""],
           				["#{I18n.t("translate.Open_type")}: <color rgb='ff0000'>#{order.open_type_id}</color>",""],
           				if (!order.line_id.nil?) then  ["#{I18n.t("translate.System_B")}: <color rgb='ff0000'>#{order.line_id}</color>",""] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
	                ["#{I18n.t("translate.Leaf")}: <color rgb='ff0000'>#{order.leaf_id}</color>",""],
                  if (order.lastixa=="mauro_lastixo") then  ["#{I18n.t("translate.lastixo")}: #{I18n.t("translate.black_gasket")}",""] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (order.lastixa=="gkri_lastixo") then  ["#{I18n.t("translate.lastixo")}: #{I18n.t("translate.grey_gasket")}",""] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  ["<b>#{I18n.t("translate.Extras")}</b>","<b>#{I18n.t("translate.Unit")}</b>","<b>#{I18n.t("translate.Price_per_unit")}</b>","<b>#{I18n.t("translate.Cost")}</b>","<b>#{I18n.t("translate.Prices")}</b>"],
                  #["<b>#{I18n.t("translate.Start_price")}</b>:","","","","<u><color rgb='ff0000'>"+price(order.super_apli_timi)+"</color></u> €"],
                  ["<b>#{I18n.t("translate.Start_price")}</b>:","","","","<u><color rgb='ff0000'>"+price(order.price_new)+"</color></u> €"],
                  if (!order.tzamia0.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.Inside_Outside_glass")}</b>: #{order.tzamia0} \n #{I18n.t("translate.Width")}: #{order.tm_p_tzami0} mm -- #{I18n.t("translate.Height")}: #{order.tm_u_tzami0} mm ","m<sup>2</sup>","#{if  (order.timi_m_tzami0?) then "<color rgb='008000'>(#{price(order.timi_m_tzami0)})</color>" end}",""," <color rgb='ff0000'>"+price(order.price_tzamiou0)+"</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.tzamia2.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.Inside_glass")}</b>: #{order.tzamia2} \n #{I18n.t("translate.Width")}: #{order.tm_p_tzami2} mm -- #{I18n.t("translate.Height")}: #{order.tm_u_tzami2} mm ","m<sup>2</sup>","#{if  (order.timi_m_tzami2?) then "<color rgb='008000'>(#{price(order.timi_m_tzami2)})</color>" end}",""," <color rgb='ff0000'>"+price(order.price_tzamiou2)+"</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.tzamia.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.Outside_glass")}</b>: #{order.tzamia} \n #{I18n.t("translate.Width")}: #{order.tm_p_tzami1} mm -- #{I18n.t("translate.Height")}: #{order.tm_u_tzami1} mm","m<sup>2</sup>","#{if  (order.timi_m_tzami1?) then "<color rgb='008000'>(#{price(order.timi_m_tzami1)})</color>" end}","","<color rgb='ff0000'>"+price(order.price_tzamiou)+"</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.rolo.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.Rollershutter")}</b>: #{order.rolo} #{if ( (!order.pl_rolou_ep.nil?) && (order.pl_rolou_ep > 0)) then "\n #{I18n.t("translate.Width")}: #{order.pl_rolou_ep} mm" end} #{if ( (!order.pl_rolou_ek.nil?) && (order.pl_rolou_ek > 0)) then "\n #{I18n.t("translate.Width")}: #{order.pl_rolou_ek} mm" end} #{if ( (!order.up_rolou_ep.nil?) && (order.up_rolou_ep > 0)) then "-- #{I18n.t("translate.Height")} : #{order.up_rolou_ep} mm" end} #{if ( (!order.up_rolou_ek.nil?) && (order.up_rolou_ek > 0)) then "-- #{I18n.t("translate.Height")}: #{order.up_rolou_ek} mm" end} #{if (order.kinisi_deksia_aristera == "r") then "\n #{I18n.t("translate.Motors_movement")}: #{I18n.t("translate.Right")}" else "\n #{I18n.t("translate.Motors_movement")}: #{I18n.t("translate.Left")}" end} #{if (order.klap == "a") then "\n #{I18n.t("translate.Revisionsklappe")}: #{I18n.t("translate.Revisionsklappe_A")}" end} #{if (order.klap == "b") then "\n #{I18n.t("translate.Revisionsklappe")}: #{I18n.t("translate.Revisionsklappe_B")}" end} #{if (order.deroll == "a") then "\n #{I18n.t("translate.Typ_des_Rollladens")}: #{I18n.t("translate.Typ_des_Rollladens_A")}" end} #{if (order.deroll == "b") then "\n #{I18n.t("translate.Typ_des_Rollladens")}: #{I18n.t("translate.Typ_des_Rollladens_B")}" end} #{if (order.deroll == "c") then "\n #{I18n.t("translate.Typ_des_Rollladens")}: #{I18n.t("translate.Typ_des_Rollladens_C")}" end} \n #{I18n.t("translate.Color")}: #{order.color_rolou} ","m<sup>2</sup>","#{if  (order.timi_m_ekso?) then "<color rgb='008000'>(#{price(order.timi_m_ekso)})</color>" end} #{if  (order.timi_m_epik?) then "<color rgb='008000'>(#{price(order.timi_m_epik)})</color>" end}",""," <color rgb='ff0000'>"+price(order.price_rolou)+"</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.odoigos.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.Rails")}</b>: #{order.odoigos} #{if ( (!order.up_odigou.nil?) && (order.up_odigou > 0)) then "\n #{I18n.t("translate.Height")}: #{order.up_odigou} mm" end} \n #{I18n.t("translate.Color")}: #{order.color_odoigou}","m","#{if  (order.timi_m_odoigou?) then "<color rgb='008000'>(#{price(order.timi_m_odoigou)})</color>" end}",""," <color rgb='ff0000'>"+price(order.price_odoigou)+"</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.persida.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.Profil_for_shutters")}</b>: #{order.persida} #{if ( (!order.pl_persidas.nil?) && (order.pl_persidas > 0)) then "\n #{I18n.t("translate.Width")}: #{order.pl_persidas} mm" end} #{if ( (!order.up_persidas.nil?) && (order.up_persidas > 0)) then "-- #{I18n.t("translate.Height")}: #{order.up_persidas} mm" end} \n #{I18n.t("translate.Color")}: #{order.color_persidas}","m<sup>2</sup>","#{if  (order.timi_m_persidas?) then "<color rgb='008000'>(#{price(order.timi_m_persidas)})</color>" end}",""," <color rgb='ff0000'>"+price(order.price_persidas)+"</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.prostasia_name.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.prtotection")}</b>: #{order.prostasia_name} Πλατος: #{order.tm_p_prostasia} mm","m","#{if  (order.timi_m_p_prostasia?) then "<color rgb='008000'>(#{price(order.timi_m_p_prostasia)})</color>" end}","","<color rgb='ff0000'>"+price(order.prostasia_price)+"</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.profil_deksia_1.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.External_profile_right")}</b>: #{order.profil_deksia_1}, #{order.pd1_code} \n #{I18n.t("translate.Quantity")}: #{order.profil_deksia_arithmos_1} |   #{I18n.t("translate.Length")}: #{order.tm_u_pd1} mm","m","<color rgb='008000'>(#{price(order.timi_m_p_d_1)})</color>","","<color rgb='ff0000'>#{price(order.timi_profil_deksia_1)}</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.profil_deksia_2.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.External_profile_right")}</b>: #{order.profil_deksia_2}, #{order.pd2_code} \n #{I18n.t("translate.Quantity")}: #{order.profil_deksia_arithmos_2} |  #{I18n.t("translate.Length")}: #{order.tm_u_pd2} mm","m","<color rgb='008000'>(#{price(order.timi_m_p_d_2)})</color>","","<color rgb='ff0000'>#{price(order.timi_profil_deksia_2)}</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.profil_deksia_3.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.External_profile_right")}</b>: #{order.profil_deksia_3}, #{order.pd3_code} \n #{I18n.t("translate.Quantity")}: #{order.profil_deksia_arithmos_3} |  #{I18n.t("translate.Length")}: #{order.tm_u_pd3} mm","m","<color rgb='008000'>(#{price(order.timi_m_p_d_3)})</color>","","<color rgb='ff0000'>#{price(order.timi_deksia_profil_3)}</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.profil_deksia_1.nil? || !order.profil_deksia_2.nil? || !order.profil_deksia_3.nil?) then  ["#{I18n.t("translate.Color")}: #{order.color_profil_d}","","","",""] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.profil_aristera_1.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.External_profile_Left")}</b>: #{order.profil_aristera_1}, #{order.pa1_code} \n #{I18n.t("translate.Quantity")}: #{order.profil_aristera_arithmos_1} |  #{I18n.t("translate.Length")}: #{order.tm_u_pa1} mm","m","<color rgb='008000'>(#{price(order.timi_m_p_a_1)})</color>","","<color rgb='ff0000'>#{price(order.timi_profil_aristera_1)}</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.profil_aristera_2.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.External_profile_Left")}</b>: #{order.profil_aristera_2}, #{order.pa2_code} \n #{I18n.t("translate.Quantity")}: #{order.profil_aristera_arithmos_2} |  #{I18n.t("translate.Length")}: #{order.tm_u_pa2} mm","m","<color rgb='008000'>(#{price(order.timi_m_p_a_2)})</color>","","<color rgb='ff0000'>#{price(order.timi_profil_aristera_2)}</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.profil_aristera_3.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.External_profile_Left")}</b>: #{order.profil_aristera_3}, #{order.pa3_code} \n #{I18n.t("translate.Quantity")}: #{order.profil_aristera_arithmos_3} |  #{I18n.t("translate.Length")}: #{order.tm_u_pa3} mm","m","<color rgb='008000'>(#{price(order.timi_m_p_a_3)})</color>","","<color rgb='ff0000'>#{price(order.timi_profil_aristera_3)}</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.profil_aristera_1.nil? || !order.profil_aristera_2.nil? || !order.profil_aristera_3.nil?) then  ["#{I18n.t("translate.Color")}: #{order.color_profil_a}","","","",""] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.profil_panw_1.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.External_profile_Top")}</b>: #{order.profil_panw_1}, #{order.pp1_code} \n #{I18n.t("translate.Quantity")}: #{order.profil_panw_arithmos_1} | #{I18n.t("translate.Length")}: #{order.tm_p_pp1} mm ","m","<color rgb='008000'>(#{price(order.timi_m_p_p_1)})</color>","","<color rgb='ff0000'>#{price(order.timi_profil_panw_1)}</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.profil_panw_2.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.External_profile_Top")}</b>: #{order.profil_panw_2}, #{order.pp2_code} \n #{I18n.t("translate.Quantity")}: #{order.profil_panw_arithmos_2} | #{I18n.t("translate.Length")}: #{order.tm_p_pp2} mm ","m","<color rgb='008000'>(#{price(order.timi_m_p_p_2)})</color>","","<color rgb='ff0000'>#{price(order.timi_profil_panw_2)}</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.profil_panw_3.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.External_profile_Top")}</b>: #{order.profil_panw_3}, #{order.pp3_code} \n #{I18n.t("translate.Quantity")}: #{order.profil_panw_arithmos_3} | #{I18n.t("translate.Length")}: #{order.tm_p_pp3} mm ","m","<color rgb='008000'>(#{price(order.timi_m_p_p_3)})</color>","","<color rgb='ff0000'>#{price(order.timi_profil_panw_3)}</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.profil_panw_1.nil? || !order.profil_panw_2.nil? || !order.profil_panw_3.nil?) then  ["#{I18n.t("translate.Color")}: #{order.color_profil_p}","","","",""] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.profil_katw_1.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.External_profile_Bottom")}</b>: #{order.profil_katw_1}, #{order.pk1_code} \n #{I18n.t("translate.Quantity")}: #{order.profil_katw_arithmos_1} | #{I18n.t("translate.Length")}: #{order.tm_p_pk1} mm ","m","<color rgb='008000'>(#{price(order.timi_m_p_k_1)})</color>","","<color rgb='ff0000'>#{price(order.timi_profil_katw_1)}</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.profil_katw_2.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.External_profile_Bottom")}</b>: #{order.profil_katw_2}, #{order.pk2_code} \n #{I18n.t("translate.Quantity")}: #{order.profil_katw_arithmos_2} | #{I18n.t("translate.Length")}: #{order.tm_p_pk2} mm ","m","<color rgb='008000'>(#{price(order.timi_m_p_k_2)})</color>","","<color rgb='ff0000'>#{price(order.timi_profil_katw_2)}</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.profil_katw_3.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.External_profile_Bottom")}</b>: #{order.profil_katw_3}, #{order.pk3_code} \n #{I18n.t("translate.Quantity")}: #{order.profil_katw_arithmos_3} | #{I18n.t("translate.Length")}: #{order.tm_p_pk3} mm ","m","<color rgb='008000'>(#{price(order.timi_m_p_k_3)})</color>","","<color rgb='ff0000'>#{price(order.timi_profil_katw_3)}</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.profil_katw_1.nil? || !order.profil_katw_2.nil? || !order.profil_katw_3.nil?) then  ["#{I18n.t("translate.Color")}: #{order.color_profil_k}","","","",""] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.typos_katw_1.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.Types")}</b>: #{order.typos_katw_1}, #{order.typos_code} \n #{I18n.t("translate.Quantity")}: #{order.typos_katw_arithmos_1} | #{I18n.t("translate.Length")}: #{order.tm_p_t1} ","m","<color rgb='008000'>(#{price(order.timi_m_t_1)})</color>","","<color rgb='ff0000'>#{price(order.timi_typos_katw_1)}</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.window_still.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.WindowStill")}</b>: #{order.window_still}", "#{if (order.m_window_still?) then "#{order.m_window_still}" end}","#{if (order.timi_m_window_still?) then "<color rgb='008000'>(#{price(order.timi_m_window_still)})</color>" end}",""," <color rgb='ff0000'>"+price(order.price_window_still)+"</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  if (!order.place.nil?) then  ["<b>#{order.aukson}.#{counter = counter + 1}: #{I18n.t("translate.Place")}</b>: #{order.place}", "#{if (order.m_place?) then "#{order.m_place}" end}","#{if (order.timi_m_place?) then "<color rgb='008000'>(#{price(order.timi_m_place)})</color>" end}",""," <color rgb='ff0000'>"+price(order.price_place)+"</color> €"] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,

                  #if (!order.typos_katw_1.nil? || !order.typos_katw_2.nil? || !order.typos_katw_3.nil?) then  ["#{I18n.t("translate.Color")}: #{order.color_profil_k}","","","",""] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                  ["<b>#{I18n.t("translate.Price_with_extras")}</b>:","","","","<u><color rgb='ff0000'>"+price(order.price_update)+"</color></u> €"],
                  ["<b>#{I18n.t("translate.Final_price")}</b>: (var X price with extra)","#{order.posotoita}","#{price(order.price_update)} €","","<u><color rgb='ff0000'>"+price(order.price_sum)+"</color></u> €"],
  							],:cell_style => {:size => 7, :inline_format => true } )do
				      			column(0).width = 200
				      			column(1).width = 20
                    column(2).width = 64
                    column(3).width = 64
                    column(4).width = 64

                    column(2).align = :right
                    column(3).align = :right
                    column(4).align = :right
				      			#cells.padding = 1
                    row(0..9).padding = 0
                    row(9..100).padding_bottom = 2
                    row(10..100).padding_top = 1
                    row(10..100).padding_right = 2
                    row(10..100).padding_left = 0
                    column(1).padding_left = 1
                    column(2).padding_left = 1
                    column(3).padding_left = 1
                    column(4).padding_right = 2
                    column(4).padding_bottom = 3
                    row(0..9).borders = []
                    row(9).borders = [:bottom]
                    row(10..100).borders = [:bottom,:right]
				      			#column(0).borders = []
				      			#column(1).borders = [:bottom]
                    #column(2).borders = [:left,:bottom]
          
				    		end
      data3 = make_table([
                          [{:image => eikona,:image_width => 130},""], 
                          ["<b>#{I18n.t("translate.Width")}</b>: #{number_with_precision(order.width, :precision => 0, :delimiter => '.')} mm",""],
                          ["<b>#{I18n.t("translate.Height")}</b>: #{number_with_precision(order.height, :precision => 0, :delimiter => '.')} mm",""],
                          ["<b>#{I18n.t("translate.Position_width")}</b>: #{number_with_precision(order.width_new, :precision => 0, :delimiter => '.')} mm",""],
                          ["<b>#{I18n.t("translate.Position_height")}</b>: #{number_with_precision(order.height_new, :precision => 0, :delimiter => '.')} mm",""],
                          if (!order.xwrisma1.nil?) then  ["<b>#{I18n.t("translate.Left_side")}</b>: #{number_with_precision(order.xwrisma1, :precision => 0, :delimiter => '.')} mm, \n <b>#{I18n.t("translate.Right_side")}</b>: #{number_with_precision(order.xwrisma2, :precision => 0, :delimiter => '.')} mm",""] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                          if (!order.xwrisma3_1.nil?) then  ["<b>#{I18n.t("translate.Left_side")}</b>: #{number_with_precision(order.xwrisma3_1, :precision => 0, :delimiter => '.')} mm, \n <b>#{I18n.t("translate.Middle")}</b>: #{number_with_precision(order.xwrisma3_2, :precision => 0, :delimiter => '.')} mm, \n <b>#{I18n.t("translate.Right_side")}</b>: #{number_with_precision(order.xwrisma3_3, :precision => 0, :delimiter => '.')} mm",""] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                          if (!order.xwrisma_y_1.nil?) then  ["<b>#{I18n.t("translate.Top_side")}</b>: #{number_with_precision(order.xwrisma_y_1, :precision => 0, :delimiter => '.')} mm,\n <b>#{I18n.t("translate.Bottom_side")}</b>: #{number_with_precision(order.xwrisma_y_2, :precision => 0, :delimiter => '.')} mm",""] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                          [{:content => "-----------------------------------------", :borders => [:bottom]},{:content => "", :height => 2}],
                          ["<b>#{I18n.t("translate.Inside_color")}</b>: #{order.main_color_id}"],
                          ["<b>#{I18n.t("translate.Outside_color")}</b>: #{order.main_color_eksw_id}"],
                          if (!order.right_color_id.nil?) then  ["#{I18n.t("diastaseis.color_deksia")}: #{order.right_color_id} \n #{I18n.t("diastaseis.color_aristera")}: #{order.left_color_id} \n #{I18n.t("diastaseis.color_panw")}: #{order.up_color_id} \n #{I18n.t("diastaseis.color_katw")}: #{order.down_color_id}",""] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                          if (!order.leaf_color_id.nil?) then  ["#{I18n.t("diastaseis.color_fullou")}: #{order.leaf_color_id}",""] else [{:content => "", :height => 0},{:content => "", :height => 0}]  end,
                          [{:content => "-----------------------------------------", :borders => [:bottom]},{:content => "", :height => 2}],
                          [{:content => order.sxolia, :borders => [:bottom]},{:content => "", :height => 2}],
        ],:cell_style => {:size => 7, :inline_format => true } )do
                    column(0).width = 130
                    column(1).width = 0
                    column(1).align = :right
                    cells.padding = 1
                    column(0).borders = []
                    column(1).borders = []
                end
  		data += [
  			    [   order.aukson, 
  			    	order.posotoita, 
  			    	data3 ,
  			    	data2
  			    ]
  			    ]
  	end

  	#add_page_break_if_overflow(self) do |pdf|
	    table(data, :header => false,
  		        :cell_style => {:size => 7, :inline_format => true, :borders => []  }#, :borders => [:bottom]
  		     ) do |table|
  		    table.column(0).width = 25
  			  table.column(1).width = 25
  			  table.column(2).width = 130
  			  table.column(3).width = 420
          #table.column(4).width = 90
  			  table.row(0..100).borders = [:bottom]
  		end

      total_price
	  #end
    end#end b box
    repeat :all do
      move_down(0)
    end

  	repeat :all do
  		bounding_box([bounds.left - 30 , bounds.top + 35 ], :width => bounds.width + 65 ) do
        cell :content => "#{I18n.t("translate.Company")} \n #{I18n.t("translate.Phone")}: 23920-33333 \n ---------------------------------------------- \n #{I18n.t("translate.Name")}: #{@name} \n #{I18n.t("translate.surname")}: #{@surname} \n #{I18n.t("translate.Company")}: #{@company} \n #{I18n.t("translate.Address")}: #{@address}\n #{I18n.t("translate.Mobile")}: #{@phone} \n Email: #{@email}",
             #:background_color => 'EEEEEE',
             :width => bounds.width,
             :height => 150,
             :align => :right,
             :text_color => "001B76",
             :borders => [],
             :size => 10,
             #:border_width => 2,
             #:border_color => '00FF00',
             :padding => 2
        image "#{Rails.root}/app/assets/images/fenstra-logo.png", :width => 122, :height => 110
        stroke_horizontal_rule
        move_down(10)
        font "Helvetica"
        table([["Pos", "Var", "Image", "Info"]]) do
          column(0).width = 25
          column(1).width = 25
          column(2).width = 130
          column(3).width = 420
          #column(4).width = 90
          #column(3).align = :right
          #column(5).width = 110
          row(0).font_style = :bold
          row(0).background_color = "d0d0d0"
          row(0).borders = [:bottom]
          #cells.borders = [:bottom]
          cells.padding = 2
        end
        end
      
    move_down(30)

    bounding_box [bounds.left, bounds.bottom + 20], :width  => bounds.width, :height  => bounds.height - 100 do
        font "Helvetica"
        stroke_horizontal_rule
        move_down(1)
        table([ ["FENSTRA e.K.", "Eltinger Str.61", "www.fenstra.de"], 
                ["KFenster & Türen", "71229 Leonberg", "info@fenstra.de"],
                ["", "Mobil: 0157-50 120 110", ""], ]) do
         column(0).width = 180
         column(1).width = 180
         column(2).width = 180
         cells.borders = []
         cells.padding = 1
         cells.size = 6
        end
        
    end

  end#repeat_all

    page_count.times do |i|
        bounding_box([bounds.left, bounds.bottom], :width => bounds.width, :height => 30) {
        # for each page, count the page number and write it
        go_to_page i+1
             move_down 0 # move below the document margin
             text "#{i+1}/#{page_count}", :align => :right, :size => 9 # write the page number and the total page count
        }
    end
  
  end#pinakas_row
end#class