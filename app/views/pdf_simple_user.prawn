pdf.bounding_box [pdf.bounds.left - 25, pdf.bounds.top - 105], :width  => pdf.bounds.width + 50, :height => pdf.bounds.height - 50 do

#pdf.move_down(130)

data = [ ["Pos", "Var", "Type", "Extra", "Prices", "Γενικά"] ]

#pdf.table  [ ["Header", "A " * 5, "B"],
 #["Data row", "C", "D " * 5],
 #["Another data row", "E", "F"]]


#col1 = ( @items.collect{ |order|  [order.open_categorie_id]})
#col2 = ( @items.collect{ |order|  [order.material_id]})

#pdf.table([  [col1, col2],[col2,""]  ])


 #pdf.table(data)

 #pdf.move_down(30)


line = "Line"
#pdf.font "Helvetica"
pdf.font "#{Rails.root}/app/assets/fonts/DejaVuSans.ttf"
 astoo = (@items.collect.with_index{ |order,i| 
  
  koimeno = order.image
  #eikona = "#{Rails.root}/app/assets/images/#{order.image}" imagesize 50
  eikona = "#{Rails.root}/public/upload/#{order.canvas}.png"

  my_new_array = [ 
                 ["#{I18n.t("mpara.open_category")}: <color rgb='ff0000'>#{I18n.t("kouf."<<order.open_categorie_id)}</color>",""],
                 ["#{I18n.t("mpara.material")}: <color rgb='ff0000'>#{order.material_id}</color>",""], 
                 ["#{I18n.t("material.constructor")}: <color rgb='ff0000'>#{order.constructor_id}</color>",""], 
                 ["#{I18n.t("material.system")}: <color rgb='ff0000'>#{order.system_id}</color>",""],
                 ["#{I18n.t("mpara.open_type")}: <color rgb='ff0000'>#{order.open_type_id}</color>",""],
                 ["#{if (!order.line_id.nil?) then  "#{I18n.t("material.line")}: #{order.line_id}" end}",""],
                 ["#{I18n.t("mpara.leaf")}: #{order.leaf_id} ",""],
                 ["#{I18n.t("diastaseis.upsos")}: #{order.height_new} mm",""],
                 ["#{I18n.t("diastaseis.platos")}: #{order.width_new} mm",""],
                 ["#{if (!order.xwrisma1.nil?) then  "Xwrisma1: #{order.xwrisma1}mm, Xwrisma2: #{order.xwrisma2}mm" end}",""],
                 ["#{if (!order.xwrisma3_1.nil?) then  "Xwrisma1: #{order.xwrisma3_1}mm, Xwrisma2: #{order.xwrisma3_2}mm, Xwrisma3: #{order.xwrisma3_3}mm" end}",""],
                 ["#{if (!order.xwrisma_y_1.nil?) then  "Xwrisma panw: #{order.xwrisma_y_1}mm, Xwrisma katw: #{order.xwrisma_y_2}mm" end}",""],
                 ["#{I18n.t("mpara.color")}: #{order.main_color_id} ",""],
                 ["#{if (!order.right_color_id.nil?) then  "#{I18n.t("diastaseis.color_deksia")}: #{order.right_color_id}  #{I18n.t("diastaseis.color_aristera")}: #{order.left_color_id}  #{I18n.t("diastaseis.color_panw")}: #{order.up_color_id}  #{I18n.t("diastaseis.color_katw")}: #{order.down_color_id}" end} ",""],
                 ["#{if (!order.leaf_color_id.nil?) then  "#{I18n.t("diastaseis.color_fullou")}: #{order.leaf_color_id}" end}",""],
                 ["#{if (order.lastixa=="mauro_lastixo") then  "#{I18n.t("diastaseis.lastixo")}" end} #{if (order.lastixa=="gkri_lastixo") then  "Gray lastixo" end}",""],
                 ["#{I18n.t("material_pinakas.arxiki_timi")}:","<u><color rgb='ff0000'>#{number_to_currency(order.price_new,:unit=>'', format: "%n %u")}</color></u> €"],
                 ["#{if (!order.tzamia2.nil?) then  "#{I18n.t("extra.glass")}: #{order.tzamia2}"end}","#{if (!order.tzamia2.nil?) then  "<color rgb='ff0000'>#{number_to_currency(order.price_tzamiou2,:unit=>'', format: "%n %u")}</color> €"end}"],
                 ["#{if (!order.tzamia.nil?) then  "#{I18n.t("extra.glass")}: #{order.tzamia}" end}","#{if (!order.tzamia.nil?) then "<color rgb='ff0000'>#{number_to_currency(order.price_tzamiou,:unit=>'', format: "%n %u")}</color> €" end}"],
                 ["#{if (!order.rolo.nil?) then  "#{I18n.t("extra.rola")}: #{order.rolo} #{if ( (!order.pl_rolou_ep.nil?) && (order.pl_rolou_ep > 0)) then "\n Πλάτος κουτιού: #{order.pl_rolou_ep} mm" end} #{if ( (!order.pl_rolou_ek.nil?) && (order.pl_rolou_ek > 0)) then "\n Πλάτος κουτιού: #{order.pl_rolou_ek} mm" end} #{if ( (!order.up_rolou_ep.nil?) && (order.up_rolou_ep > 0)) then "\n Υψος κουτιού: #{order.up_rolou_ep} mm" end} #{if ( (!order.up_rolou_ek.nil?) && (order.up_rolou_ek > 0)) then "\n Υψος κουτιού: #{order.up_rolou_ek} mm" end} #{if (order.kinisi_deksia_aristera == "r") then "\n Κίνηση μηχανισμού: Right" else "\n Κίνηση μηχανισμού: Left" end} \n #{I18n.t("mpara.color")}: #{order.color_rolou}" end}","#{if (!order.rolo.nil?) then  "<color rgb='ff0000'>#{number_to_currency(order.price_rolou,:unit=>'', format: "%n %u")}</color> €" end}"],
                 ["#{if (!order.odoigos.nil?) then  "#{I18n.t("extra.odoigoi")}: #{order.odoigos}  #{if ( (!order.up_odigou.nil?) && (order.up_odigou > 0)) then "\n Υψος οδοιγου: #{order.up_odigou} mm" end} \n #{I18n.t("extra.odoigoi_color")}: #{order.color_odoigou}" end}","#{if (!order.odoigos.nil?) then  "<color rgb='ff0000'>#{number_to_currency(order.price_odoigou,:unit=>'', format: "%n %u")}</color> €" end}"],
                 ["#{if (!order.persida.nil?) then  "#{I18n.t("extra.persides")}: #{order.persida} #{if ( (!order.pl_persidas.nil?) && (order.pl_persidas > 0)) then "\n Πλατος περσιδας: #{order.pl_persidas} mm" end} #{if ( (!order.up_persidas.nil?) && (order.up_persidas > 0)) then "\n Υψος περσιδας: #{order.up_persidas} mm" end} \n #{I18n.t("extra.color_persidas")}: #{order.color_persidas}" end}","#{if (!order.persida.nil?) then  "<color rgb='ff0000'>#{number_to_currency(order.price_persidas,:unit=>'', format: "%n %u")}</color> €" end}"],
                 ["#{if (!order.prostasia_name.nil?) then  "#{I18n.t("extra.persides")}: #{order.prostasia_name}" end}","#{if (!order.prostasia_name.nil?) then  "<color rgb='ff0000'>#{number_to_currency(order.prostasia_price,:unit=>'', format: "%n %u")}</color> €" end}"],
                 ["#{if (!order.profil_deksia_1.nil? || !order.profil_deksia_2.nil? || !order.profil_deksia_3.nil?) then  "#{I18n.t("mpara.color")}: #{order.color_profil_d}" end} ",""],
                 ["#{if (!order.profil_deksia_1.nil?) then  "#{I18n.t("extra.profil_deksia")}: #{order.profil_deksia_1} \n #{I18n.t("extra.qua_pro")}: #{order.profil_deksia_arithmos_1}" end} ","#{if (!order.profil_deksia_1.nil?) then  "<color rgb='ff0000'>#{order.timi_profil_deksia_1}</color> €" end} "],
                 ["#{if (!order.profil_deksia_2.nil?) then  "#{I18n.t("extra.profil_deksia")}: #{order.profil_deksia_2} \n #{I18n.t("extra.qua_pro")}: #{order.profil_deksia_arithmos_2} " end}","#{if (!order.profil_deksia_2.nil?) then  "<color rgb='ff0000'>#{order.timi_profil_deksia_2}</color> €" end}"],
                 ["#{if (!order.profil_deksia_3.nil?) then  "#{I18n.t("extra.profil_deksia")}: #{order.profil_deksia_3} \n #{I18n.t("extra.qua_pro")}: #{order.profil_deksia_arithmos_3} " end} ","#{if (!order.profil_deksia_3.nil?) then  "<color rgb='ff0000'>#{order.timi_deksia_profil_3}</color> €" end} "],
                 ["#{if (!order.profil_aristera_1.nil? || !order.profil_aristera_2.nil? || !order.profil_aristera_3.nil?) then  " #{I18n.t("mpara.color")}: #{order.color_profil_a}" end}",""],
                 ["#{if (!order.profil_aristera_1.nil?) then  "#{I18n.t("extra.profil_aristera")}: #{order.profil_aristera_1} \n #{I18n.t("extra.qua_pro")}: #{order.profil_aristera_arithmos_1}" end}","#{if (!order.profil_aristera_1.nil?) then  "<color rgb='ff0000'>#{order.timi_profil_aristera_1}</color> €" end}"],
                 ["#{if (!order.profil_aristera_2.nil?) then  "#{I18n.t("extra.profil_aristera")}: #{order.profil_aristera_2} \n #{I18n.t("extra.qua_pro")}: #{order.profil_aristera_arithmos_2}" end}","#{if (!order.profil_aristera_2.nil?) then  "<color rgb='ff0000'>#{order.timi_profil_aristera_2}</color> €" end}"],
                 ["#{if (!order.profil_aristera_3.nil?) then  "#{I18n.t("extra.profil_aristera")}: #{order.profil_aristera_3} \n #{I18n.t("extra.qua_pro")}: #{order.profil_aristera_arithmos_3}" end}","#{if (!order.profil_aristera_3.nil?) then  "<color rgb='ff0000'>#{order.timi_profil_aristera_3}</color> €" end}"],
                 ["#{if (!order.profil_panw_1.nil? || !order.profil_panw_2.nil? || !order.profil_panw_3.nil?) then  "#{I18n.t("mpara.color")}: #{order.color_profil_p}" end}",""],
                 ["#{if (!order.profil_panw_1.nil?) then  "#{I18n.t("extra.profil_panw")}: #{order.profil_panw_1} \n #{I18n.t("extra.qua_pro")}: #{order.profil_panw_arithmos_1}" end}","#{if (!order.profil_panw_1.nil?) then  "<color rgb='ff0000'>#{order.timi_profil_panw_1}</color> €" end}"],
                 ["#{if (!order.profil_panw_2.nil?) then  "#{I18n.t("extra.profil_panw")}: #{order.profil_panw_2} \n #{I18n.t("extra.qua_pro")}: #{order.profil_panw_arithmos_2}" end}","#{if (!order.profil_panw_2.nil?) then  "<color rgb='ff0000'>#{order.timi_profil_panw_2}</color> €" end}"],
                 ["#{if (!order.profil_panw_3.nil?) then  "#{I18n.t("extra.profil_panw")}: #{order.profil_panw_3} \n #{I18n.t("extra.qua_pro")}: #{order.profil_panw_arithmos_3}" end}  ","#{if (!order.profil_panw_3.nil?) then  "<color rgb='ff0000'>#{order.timi_profil_panw_3}</color> €" end}  "],
                 ["#{if (!order.profil_katw_1.nil? || !order.profil_katw_2.nil? || !order.profil_katw_3.nil?) then  "#{I18n.t("mpara.color")}: #{order.color_profil_k}" end}",""],
                 ["#{if (!order.profil_katw_1.nil?) then  "#{I18n.t("extra.profil_katw")}: #{order.profil_katw_1} #{I18n.t("extra.qua_pro")}: #{order.profil_katw_arithmos_1}" end}","#{if (!order.profil_katw_1.nil?) then  "<color rgb='ff0000'>#{order.timi_profil_katw_1}</color> €" end}"],
                 ["#{if (!order.profil_katw_2.nil?) then  "#{I18n.t("extra.profil_katw")}: #{order.profil_katw_2} \n #{I18n.t("extra.qua_pro")}: #{order.profil_katw_arithmos_2}" end}","#{if (!order.profil_katw_2.nil?) then  "<color rgb='ff0000'>#{order.timi_profil_katw_2}</color> €" end}"],
                 ["#{if (!order.profil_katw_3.nil?) then  "#{I18n.t("extra.profil_katw")}: #{order.profil_katw_3} \n #{I18n.t("extra.qua_pro")}: #{order.profil_katw_arithmos_3}" end}","#{if (!order.profil_katw_3.nil?) then  "<color rgb='ff0000'>#{order.timi_profil_katw_3}</color> €" end}"],
                 ["#{if (!order.typos_katw_1.nil? || !order.typos_katw_2.nil? || !order.typos_katw_3.nil?) then  "#{I18n.t("mpara.color")}: #{order.color_profil_k}" end}",""],
                 ["#{if (!order.typos_katw_1.nil?) then  "#{I18n.t("extra.typos")}: #{order.typos_katw_1} \n #{I18n.t("extra.qua_pro")}: #{order.typos_katw_arithmos_1} " end}","#{if (!order.typos_katw_1.nil?) then  "<color rgb='ff0000'>#{order.timi_typos_katw_1}</color> €" end}"]

                 ]
  

[ i+1,
  order.posotoita,
  {:image => eikona, :image_height => 120,:image_width => 120},
  pdf.make_table(my_new_array)do
       cells.size = 7
       cells.borders = []
       column(0).align = :left 
       column(1).align = :right
       cells.padding = 1
       column(0).width = 200
       #column(0).width = 150
       cells.inline_format = :true
    end   ,
  number_to_currency(order.price_update,:unit=>'€', format: "%n %u"),
  number_to_currency(order.price_sum,:unit=>'€', format: "%n %u")
]



 })






#items = @items.map do |order|  number_to_currency(order.price_update,:unit=>'€', format: "%n %u"), number_to_currency(order.price_sum,:unit=>'€', format: "%n %u")
#  [
#    OpenType.where(:name => order.open_type_id).first.image ,order.open_categorie_id, order.material_id, order.constructor_id, order.system_id, order.line_id, #number_to_currency(order.price_sum,:unit=>'€')
#  ]
#end


pdf.table(astoo) do
   column(0).width = 30  #40
   column(1).width = 30  #40
   column(2).width = 120
   column(3).width = 290 #200
   column(4).width = 80  #100
   cells.padding = 1
   cells.borders = [:bottom]
   cells.size = 7
   cells.align = :left 
   cells.inline_format = :true
 end





#pdf.table items, :header => true do |table|
#  table.header=(["Header1", "Header2", "Header3", "Header4"])        
#end

#pdf.table(items, :cell_style => 
#                 {:border_lines => [:dotted, :dotted,:dotted,:dotted]},
#                 :row_colors => ["F0F0F0","FFFFCC"]
#         )

pdf.move_down(90)

pdf.font "Helvetica"


sum = [ ["", "", "", "", "Total Price:", number_to_currency(@sunolo,:unit=>'€', format: "%n %u") ] ]

pdf.table(sum) do
   column(0).width = 150
   column(1).width = 20
   column(2).width = 20
   column(3).width = 100
   column(4).width = 150
   cells.padding = 2
   cells.borders = []
   cells.size = 5
   cells.align = :left 
   column(4).borders = [:left, :top, :bottom]
   column(4).border_widths = 1
   column(4).size = 10
   column(4).font_style = :bold
   column(5).borders = [:right, :top, :bottom]
   column(5).border_widths = 1
   column(5).size = 10
   column(5).font_style = :bold
   cells.margin_bottom = 5
   #row(0).borders = [:bottom]
   #row(0).border_width = 2
   #row(0).font_style = :bold
   #columns(0..1).borders = [:right]
   #row(0).columns(0..1).borders = [:bottom, :right]
 end

#pdf.text "Total Price: #{number_to_currency(@sunolo,:unit=>'€')}", :size => 16, :style => :bold


end ##end megaloy pinaka 


pdf.repeat :all do
pdf.move_down(0)
end

pdf.repeat :all do
pdf.bounding_box [pdf.bounds.left - 25, pdf.bounds.top + 35], :width  => pdf.bounds.width + 50 do
       pdf.font "#{Rails.root}/app/assets/fonts/DejaVuSans.ttf"
       pdf.cell :content => "Βιομηχανια κουφωμάτων \n #{I18n.t("pdf.phone")}: 23920-33333 \n ---------------------------------------------- \n #{I18n.t("pdf.name")}: #{@name} \n #{I18n.t("pdf.sur_name")}: #{@surname} \n #{I18n.t("pdf.company")}: #{@company} \n #{I18n.t("pdf.address")}: #{@address}\n #{I18n.t("pdf.phone_big")}: #{@phone} \n email: #{@email}",
             #:background_color => 'EEEEEE',
             :width => pdf.bounds.width,
             :height => 150,
             :align => :right,
             :text_color => "001B76",
             :borders => [],
             #:border_width => 2,
             #:border_color => '00FF00',
             :size => 10,
             :padding => 2
        pdf.image "#{Rails.root}/app/assets/images/logo.png", :width => 175, :height => 110
        pdf.stroke_horizontal_rule
        pdf.move_down(10)
        pdf.font "Helvetica"
        pdf.table([ ["Pos", "Var", "Type", "Extra", "Price", "Text"] ]) do
         column(0).width = 30
         column(1).width = 30
         column(2).width = 120
         column(3).width = 290
         column(4).width = 80
         row(0).font_style = :bold
         row(0).background_color = "d0d0d0"
         row(0).borders = [:bottom]
         #cells.borders = [:bottom]
         cells.padding = 2
        end

end

  pdf.move_down(30)
  pdf.bounding_box [pdf.bounds.left, pdf.bounds.bottom + 20], :width  => pdf.bounds.width, :height  => pdf.bounds.height - 100 do
        pdf.font "Helvetica"
        pdf.stroke_horizontal_rule
        pdf.move_down(1)
        pdf.table([ ["Neuffer Fenster + Türen GmbH", "Registergericht Stuttgart HRB 4339", "Baden-Württembergische Bank"], 
                    ["Kronprinzstraße 8 | 70173 Stuttgart", "Gerichtsstand Stuttgart ", "(BLZ 60050101) Konto 8583921"],
                    ["Telefon: +49 (0)711 860 60 0", "Geschäftsführer: Jörg Neuffer, Philipp Neuffer", " Kto.­ Inhaber: Neuffer Fenster + Türen GmbH"],
                    ["Telefax: +49 (0)711 860 60 111", "Steuernummer: 99022/16398 ", " IBAN DE73600501010008583921"],
                    ["Email: info@fensterversand.com", "Ust.-Ident.Nr.: DE 213172812 ", "BIC SOLADEST"],  ]) do
         column(0).width = 180
         column(1).width = 180
         column(2).width = 180
         cells.borders = []
         cells.padding = 1
         cells.size = 6
        end
        
    end
    
end

pdf.number_pages "(<page>/<total>)", :size => 9, :at => [500, 10]