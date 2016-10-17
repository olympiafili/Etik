pdf.bounding_box [pdf.bounds.left, pdf.bounds.top - 150], :width  => pdf.bounds.width, :height => pdf.bounds.height - 250 do



#pdf.move_down(5)

data = [ ["Pos", "Var", "Type", "Extra", "Price of one", "Price"] ]

#pdf.table  [ ["Header", "A " * 5, "B"],
 #["Data row", "C", "D " * 5],
 #["Another data row", "E", "F"]]


#col1 = ( @items.collect{ |order|  [order.open_categorie_id]})
#col2 = ( @items.collect{ |order|  [order.material_id]})

#pdf.table([  [col1, col2],[col2,""]  ])


 #pdf.table(data)

 #pdf.move_down(30)


line = "Line"
pdf.font "#{Rails.root}/app/assets/fonts/DejaVuSans.ttf"
 astoo = (@items.collect.with_index{ |order,i| 
  
  koimeno = order.image
  eikona = "#{Rails.root}/app/assets/images/#{order.image}"

 [i+1,
  order.posotoita,
  {:image => eikona, :image_height => 50,:image_width => 50},
  "#{I18n.t("mpara.open_category")}: #{I18n.t("kouf."<<order.open_categorie_id)}
  #{I18n.t("mpara.material")}: #{order.material_id}
  #{I18n.t("material.constructor")}: #{order.constructor_id}
  #{I18n.t("material.system")}: #{order.system_id}
  #{I18n.t("mpara.open_type")}: #{order.open_type_id}
  #{if (!order.line_id.nil?) then  "#{I18n.t("material.line")}: #{order.line_id}" end}
  #{I18n.t("mpara.leaf")}: #{order.leaf_id} 
  #{I18n.t("diastaseis.upsos")}: #{order.height} mm
  #{I18n.t("diastaseis.platos")}: #{order.width} mm #{if (!order.xwrisma1.nil?) then  "\n Xwrisma1: #{order.xwrisma1}mm, Xwrisma2: #{order.xwrisma2}mm" end} #{if (!order.xwrisma3_1.nil?) then  "\n Xwrisma1: #{order.xwrisma3_1}mm, Xwrisma2: #{order.xwrisma3_2}mm, Xwrisma3: #{order.xwrisma3_3}mm" end}
  #{I18n.t("mpara.color")}: #{order.main_color_id} #{if (!order.right_color_id.nil?) then  "\n #{I18n.t("diastaseis.color_deksia")}: #{order.right_color_id} \n #{I18n.t("diastaseis.color_aristera")}: #{order.left_color_id} \n #{I18n.t("diastaseis.color_panw")}: #{order.up_color_id} \n #{I18n.t("diastaseis.color_katw")}: #{order.down_color_id}" end} #{if (!order.leaf_color_id.nil?) then  "\n #{I18n.t("diastaseis.color_fullou")}: #{order.leaf_color_id}" end} #{if (order.lastixo==1) then  "\n #{I18n.t("diastaseis.lastixo")}" end} #{if (!order.tzamia.nil?) then  "\n #{I18n.t("extra.glass")}: #{order.tzamia}" end} #{if (!order.rolo.nil?) then  "\n #{I18n.t("extra.rola")}: #{order.rolo} \n #{I18n.t("mpara.color")}: #{order.color_rolou}" end} #{if (!order.odoigos.nil?) then  "\n #{I18n.t("extra.odoigoi")}: #{order.odoigos} \n #{I18n.t("extra.odoigoi_color")}: #{order.color_odoigou}" end} #{if (!order.persida.nil?) then  "\n #{I18n.t("extra.persides")}: #{order.persida} \n #{I18n.t("extra.color_persidas")}: #{order.color_persidas}" end} #{if (!order.profil_panw.nil?) then  "\n #{I18n.t("extra.profil_panw")}: #{order.profil_panw} \n #{I18n.t("mpara.color")}: #{order.color_profil_p} \n #{I18n.t("extra.qua_pro")}: #{order.posotita_p}" end} #{if (!order.profil_katw.nil?) then  "\n #{I18n.t("extra.profil_katw")}: #{order.profil_katw} \n #{I18n.t("mpara.color")}: #{order.color_profil_k} \n #{I18n.t("extra.qua_pro")}: #{order.posotita_k}" end} #{if (!order.profil_deksia.nil?) then  "\n #{I18n.t("extra.profil_deksia")}: #{order.profil_deksia} \n #{I18n.t("mpara.color")}: #{order.color_profil_d} \n #{I18n.t("extra.qua_pro")}: #{order.posotita_d}" end} #{if (!order.profil_aristera.nil?) then  "\n #{I18n.t("extra.profil_aristera")}: #{order.profil_aristera} \n #{I18n.t("mpara.color")}: #{order.color_profil_a} \n #{I18n.t("extra.qua_pro")}: #{order.posotita_a}" end} #{if (!order.typos.nil?) then  "\n #{I18n.t("extra.typos")}: #{order.typos} \n #{I18n.t("extra.typos_color")}: #{order.color_typos}" end}",
  number_to_currency(order.price_update,:unit=>'€'),
  number_to_currency(order.price_sum,:unit=>'€') ]



 })





#items = @items.map do |order| 
#  [
#    OpenType.where(:name => order.open_type_id).first.image ,order.open_categorie_id, order.material_id, order.constructor_id, order.system_id, order.line_id, #number_to_currency(order.price_sum,:unit=>'€')
#  ]
#end

pdf.table(astoo) do
   column(0).width = 40 
   column(1).width = 40
   column(2).width = 60
   column(3).width = 240
   column(4).width = 100
   cells.padding = 2
   cells.borders = [:bottom]
   cells.size = 10
   cells.align = :left 
   #column(0).borders = [:left]
   #rows(..).borders = [:bottom]
   #row(0).borders = [:bottom]
   #row(0).border_width = 2
   #row(0).font_style = :bold
   #columns(0..1).borders = [:right]
   #row(0).columns(0..1).borders = [:bottom, :right]
 end



#pdf.table items, :header => true do |table|
#  table.header=(["Header1", "Header2", "Header3", "Header4"])        
#end

#pdf.table(items, :cell_style => 
#                 {:border_lines => [:dotted, :dotted,:dotted,:dotted]},
#                 :row_colors => ["F0F0F0","FFFFCC"]
#         )

pdf.move_down(30)

pdf.font "Helvetica"


sum = [ ["", "", "", "", "Tolal Price:", number_to_currency(@sunolo,:unit=>'€') ] ]

pdf.table(sum) do
   column(0).width = 150
   column(1).width = 20
   column(2).width = 20
   column(3).width = 100
   column(4).width = 150
   cells.padding = 2
   cells.borders = []
   cells.size = 10
   cells.align = :left 
   column(4).borders = [:left, :top, :bottom]
   column(4).border_widths = 2
   column(4).size = 16
   column(4).font_style = :bold
   column(5).borders = [:right, :top, :bottom]
   column(5).border_widths = 2
   column(5).size = 16
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
pdf.move_down(20)
end

pdf.repeat :all do
pdf.bounding_box [pdf.bounds.left, pdf.bounds.top], :width  => pdf.bounds.width do
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
        pdf.image "#{Rails.root}/app/assets/images/ETIK.PNG", :width => 175
        pdf.stroke_horizontal_rule
        pdf.move_down(20)
        pdf.font "Helvetica"
        pdf.table([ ["Pos", "Var", "Type", "Extra", "Price of one", "Price"] ]) do
         column(0).width = 40 
         column(1).width = 40
         column(2).width = 60
         column(3).width = 240
         column(4).width = 100
         row(0).font_style = :bold
         row(0).background_color = "d0d0d0"
         row(0).borders = [:bottom]
         #cells.borders = [:bottom]
         cells.padding = 2
        end

end
pdf.bounding_box [pdf.bounds.left, pdf.bounds.bottom + 70], :width  => pdf.bounds.width do
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
         cells.padding = 2
         cells.size = 8
        end
        
    end
end

pdf.number_pages "(<page>/<total>)", :size => 9, :at => [500, 0]
