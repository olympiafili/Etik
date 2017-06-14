class Paraggelia < ActiveRecord::Base
	has_many :simple_user_pse
	has_many :orders

	mount_uploaders :avatar, AvatarUploader

	def self.search(search, current_user_id, all)
	  if ( search && all = !all) 
	  	where("(eponimo LIKE ? OR name LIKE ?) AND user like ?", "%#{search}%", "%#{search}%", current_user_id).order("id").reverse #updated_at AND done like ?
	  else
	    where(:user => current_user_id).order("id").reverse #updated_at
	  end
	end

	def self.search_admin(search, all)
	  if ( search && all = !all) 
	  	where("eponimo LIKE ?", "%#{search}%") #AND done like ?
	  else
	    where("id > ?", 0)#where(:done => 1)
	  end
	end
  
	def to_csv(options = {:col_sep => ";", :row_sep => "\r\n"})
    CSV.generate(options) do |csv|
      @customer = SimpleUserPse.where(:id => self.customer).first
      csv << ["DEALER", self.user]
      
      csv << ["CUSTOMER", self.customer, @customer.mr, @customer.name, @customer.eponimo, @customer.address, 
        @customer.city, @customer.postal_code, @customer.country_code, @customer.phone, @customer.mobile, @customer.email, @customer.fax, @customer.VAT]
      #check the pososto - i + 
      csv << ["HEAD", self.id, 0, "<General text>", "<Terms of payment>", self.pososto, 0, self.meta_pososto, "<Tax code (VAT)>", "<VAT Euro>"]
            
      self.orders.each do |order|
        @line = Line.where(:name => order.line_id).first
        @open_type = OpenType.where(:name => order.open_type_id).first

        @user_par = User.where(:id => self.user).first
        @pososto_market = @user_par.pososto
      
        #if (current_user.admin == 1)
          @pososto_dealer = @user_par.pososto_dealer
        #end
        
        #ELEPOS
        if(order.open_categorie_id != 'porta')
          url_order = "http://46.101.236.245:8860" + Rails.application.routes.url_helpers.etic_extra_path(:diorthosi => "ok", :open_categorie_name => order.open_categorie_id, :material_name => order.material_id, :constructor_name => order.constructor_id, :system_name => order.system_id, :line_name => order.line_id, :leaf_name => Leaf.where(:id => order.leaf_id).first.name , :open_type_name => order.open_type_id, :color_name => order.main_color_id, :color_eksw_name => order.main_color_eksw_id, :mesa_eksw => order.in_out, :xwrisma1 => order.xwrisma1, :xwrisma2 => order.xwrisma2, :xwrisma3_1 => order.xwrisma3_1, :xwrisma3_2 => order.xwrisma3_2, :xwrisma3_3 => order.xwrisma3_3, :xwrisma_y_1 => order.xwrisma_y_1, :xwrisma_y_2 => order.xwrisma_y_2, :color_deksia => order.right_color_id, :color_aristera => order.left_color_id, :color_panw => order.up_color_id, :color_katw => order.down_color_id, :color_fulou => order.leaf_color_id, :lastixo => order.lastixo, :width => order.width, :height => order.height, :order => order.id, :paraggelia_id => order.paraggelia_id, :dealer_id => @dealer_id, :lastixa => order.lastixa,:cat_tzamia0 => order.tzami0_cat,:cat_tzamia1 => order.tzami1_cat,:cat_tzamia2 => order.tzami2_cat,:tzamia0 => order.tzamia0, :tzamia => order.tzamia, :tzamia2 => order.tzamia2, :rolo_name => order.rolo, :xrwma_rolo => order.color_rolou, :persida => order.persida, :xrwma_persidas => order.color_persidas, :odoigos => order.odoigos, :xrwma_odoigou => order.color_odoigou, :prostasia => order.prostasia_name, :typos => order.typos_katw_1, :typos_arithmos => order.typos_katw_arithmos_1, :typos_col => order.color_profil_k, :pr_ar_1 => order.profil_aristera_1, :pr_ar_1_ar => order.profil_aristera_arithmos_1, :col_ar => order.color_profil_a, :pr_ar_2 => order.profil_aristera_2, :pr_ar_2_ar => order.profil_aristera_arithmos_2, :pr_ar_3 => order.profil_aristera_3, :pr_ar_3_ar => order.profil_aristera_arithmos_3, :pr_de_1 => order.profil_deksia_1, :pr_de_1_de => order.profil_deksia_arithmos_1, :col_de => order.color_profil_d, :pr_de_2 => order.profil_deksia_2, :pr_de_2_de => order.profil_deksia_arithmos_2, :pr_de_3 => order.profil_deksia_3, :pr_de_3_de => order.profil_deksia_arithmos_3, :pr_pa_1 => order.profil_panw_1, :pr_pa_1_pa => order.profil_panw_arithmos_1, :col_pa => order.color_profil_p, :pr_pa_2 => order.profil_panw_2, :pr_pa_2_pa => order.profil_panw_arithmos_2, :pr_pa_3 => order.profil_panw_3, :pr_pa_3_pa => order.profil_panw_arithmos_3, :pr_ka_1 => order.profil_katw_1, :pr_ka_1_ka => order.profil_katw_arithmos_1, :col_ka => order.color_profil_k, :pr_ka_2 => order.profil_katw_2, :pr_ka_2_ka => order.profil_katw_arithmos_2, :pr_ka_3 => order.profil_katw_3, :pr_ka_3_ka => order.profil_katw_arithmos_3, :pl_rolou_ep => order.pl_rolou_ep, :up_rolou_ep => order.up_rolou_ep, :pl_rolou_ek => order.pl_rolou_ek, :up_rolou_ek => order.up_rolou_ek, :pl_persidas => order.pl_persidas, :up_persidas => order.up_persidas, :up_odigou => order.up_odigou, :kinisi_deksia_aristera => order.kinisi_deksia_aristera, :klap_ep => order.klap, :deroll => order.deroll, :metra_click => "1", :user_id => order.user_id, :roll_rat => item.roll_rat, :rat_quan => item.rat_quan, :roll_rdm => item.roll_rdm, :roll_rlt => item.roll_rlt, :roll_pfm => item.roll_pfm, :roll_pss => item.roll_pss)
        else
          url_order = "http://46.101.236.245:8860" + Rails.application.routes.url_helpers.etic_door_path(:diorthosi => "ok", :open_categorie_name => order.open_categorie_id, :material_name => order.material_id, :constructor_name => order.constructor_id, :system_name => order.system_id, :line_name => order.line_id, :leaf_name => Leaf.where(:id => order.leaf_id).first.name , :open_type_name => order.open_type_id, :color_name => order.main_color_id, :color_eksw_name => order.main_color_eksw_id, :mesa_eksw => order.in_out, :xwrisma1 => order.xwrisma1, :xwrisma2 => order.xwrisma2, :xwrisma3_1 => order.xwrisma3_1, :xwrisma3_2 => order.xwrisma3_2, :xwrisma3_3 => order.xwrisma3_3, :xwrisma_y_1 => order.xwrisma_y_1, :xwrisma_y_2 => order.xwrisma_y_2, :color_deksia => order.right_color_id, :color_aristera => order.left_color_id, :color_panw => order.up_color_id, :color_katw => order.down_color_id, :width => order.width, :height => order.height, :order => order.id, :paraggelia_id => order.paraggelia_id, :dealer_id => @dealer_id, :pr_ar_1 => order.profil_aristera_1, :pr_ar_1_ar => order.profil_aristera_arithmos_1, :col_ar => order.color_profil_a, :pr_ar_2 => order.profil_aristera_2, :pr_ar_2_ar => order.profil_aristera_arithmos_2, :pr_ar_3 => order.profil_aristera_3, :pr_ar_3_ar => order.profil_aristera_arithmos_3, :pr_de_1 => order.profil_deksia_1, :pr_de_1_de => order.profil_deksia_arithmos_1, :col_de => order.color_profil_d, :pr_de_2 => order.profil_deksia_2, :pr_de_2_de => order.profil_deksia_arithmos_2, :pr_de_3 => order.profil_deksia_3, :pr_de_3_de => order.profil_deksia_arithmos_3, :pr_pa_1 => order.profil_panw_1, :pr_pa_1_pa => order.profil_panw_arithmos_1, :col_pa => order.color_profil_p, :pr_pa_2 => order.profil_panw_2, :pr_pa_2_pa => order.profil_panw_arithmos_2, :pr_pa_3 => order.profil_panw_3, :pr_pa_3_pa => order.profil_panw_arithmos_3, :pr_ka_1 => order.profil_katw_1, :pr_ka_1_ka => order.profil_katw_arithmos_1, :col_ka => order.color_profil_k, :pr_ka_2 => order.profil_katw_2, :pr_ka_2_ka => order.profil_katw_arithmos_2, :pr_ka_3 => order.profil_katw_3, :pr_ka_3_ka => order.profil_katw_arithmos_3, :pl_rolou_ep => order.pl_rolou_ep, :klap_ep => order.klap, :deroll => order.deroll, :metra_click => "1", :equipment => order.equipment, :user_id => order.user_id)
        end

        @main_color = Color.where(:name => order.main_color_id).first
        if(@main_color)
          color_code = @main_color.sungate_both
        else
          color_code = @main_color
        end

        csv << ["ELEPOS", order.id, order.posotoita, @open_type.code, @open_type.code, color_code, order.open_type_id, 
          order.width, order.height, order.width_new, order.height_new, @line.sungate_code, order.tzamia0, "<Handle inside>", "<Handle outside>", 
          "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.price_sum, url_order, order.line_desc]
          #'=HYPERLINK("'+test+'"; "Link")'
        #INITIAL_PRICE
        csv << ["INITIAL_PRICE", order.price_new]
        csv << ["PRICE 1", order.price_market.round(2)]
        csv << ["PRICE 2", order.price_dealer.round(2)]
        csv << ["IMAGE BASE 64", order.base64_code.to_s]
        
        #SURCHARGE_LINE
        csv << ["SURCHARGE_LINE", order.surcharge_line]
        
        #SURCHARGE_COLOR
        csv << ["SURCHARGE_COLOR_IN", order.surcharge_color]
        csv << ["SURCHARGE_COLOR_OUT", order.surcharge_color_eksw]
        
        #ADDOPTPOS
        #roll guides
        if (order.odoigos != nil)
          @roll_guide = RollGuide.where(:name => order.odoigos).first
          csv << ["ADDOPTPOS", @roll_guide.sungate_code, "Left/Right", order.up_odigou]
        end
        #persida
        if (order.persida != nil)
           @persida = Persides.where(:name => order.persida).first
          csv << ["ADDOPTPOS", @persida.sungate_code, "Top", order.pl_persidas]
        end
        #prostasia
        if (order.prostasia_name != nil)
          @prostasia = TypoiProstasia.where(:name => order.prostasia_name).first
          csv << ["ADDOPTPOS", @prostasia.sungate_code, "<Location>", order.tm_p_prostasia]
        end
        #rolo epik
        if (order.rolo != nil && order.timi_m_epik != nil)
          @rolo_epik = RolaEpik.where(:name => order.rolo).first
          csv << ["ADDOPTPOS", @rolo_epik.sungate_code, "Top", order.pl_rolou_ep]
        end
        #rolo eks
        if (order.rolo != nil && order.timi_m_ekso != nil)
          @rolo_eks = RolaEkso.where(:name => order.rolo).first
          csv << ["ADDOPTPOS", @rolo_eks.sungate_code, "Top", order.pl_rolou_ek]
        end
        #window still
        if (order.window_still != nil)
          csv << ["ADDOPTPOS", order.window_still_code, ""]
        end
        #place
        if (order.place != nil)
          csv << ["ADDOPTPOS", order.place_code, ""]
        end
        #equipment
        if (order.equipment != nil)
          order.equipment.each do |equip| 
          @equipment1= Equipment.where(:name => equip).first
              if ( !@equipment1.nil? )
                csv << ["ADDOPTPOS", @equipment1.sungate_code, ""]
              end
          end
        end
        #profil typos
        if (order.typos_katw_1 != nil)
          csv << ["ADDOPTPOS", order.typos_code, "Bottom", order.tm_p_t1]
        end
        #profil deksia
        for i in 1..3
          if (order.read_attribute("pd#{i}_code") != nil)
            csv << ["ADDOPTPOS", order.read_attribute("pd#{i}_code"), "Right", order.read_attribute("tm_u_pd#{i}")]
          end
        end
        #profil aristera
        for i in 1..3
          if (order.read_attribute("pa#{i}_code") != nil)
            csv << ["ADDOPTPOS", order.read_attribute("pa#{i}_code"), "Left", order.read_attribute("tm_u_pa#{i}")]
          end
        end
        #profil panw
        for i in 1..3
          if (order.read_attribute("pp#{i}_code") != nil)
            csv << ["ADDOPTPOS", order.read_attribute("pp#{i}_code"), "Top", order.read_attribute("tm_p_pp#{i}")]
          end
        end
        #profil katw
        for i in 1..3
          if (order.read_attribute("pk#{i}_code") != nil)
            csv << ["ADDOPTPOS", order.read_attribute("pk#{i}_code"), "Bottom", order.read_attribute("tm_p_pk#{i}")]
          end
        end
        
        #DIVIDER
        if (order.xwrisma1 != nil)
          csv << ["DIVIDER", "<Article code>", "<Type of divider>", "Vertical", order.xwrisma1]
        elsif (order.xwrisma3_1 != nil)
          csv << ["DIVIDER", "<Article code>", "<Type of divider>", "Vertical", order.xwrisma3_1]
          csv << ["DIVIDER", "<Article code>", "<Type of divider>", "Vertical", order.xwrisma3_2]
        elsif (order.xwrisma4_1 != nil)
          csv << ["DIVIDER", "<Article code>", "<Type of divider>", "Vertical", order.xwrisma4_1]
          csv << ["DIVIDER", "<Article code>", "<Type of divider>", "Vertical", order.xwrisma4_2]
          csv << ["DIVIDER", "<Article code>", "<Type of divider>", "Vertical", order.xwrisma4_3]
        end
        
        if (order.xwrisma_y_2 != nil)
          csv << ["DIVIDER", "<Article code>", "<Type of divider>", "Horizontal", order.xwrisma_y_2]
        end
        
        #GLSFIELD
        if (order.tzamia != nil)
          csv << ["GLSFIELD", 1, order.tzamia]
        end
        #mesa tzami
        if (order.tzamia2 != nil)
          csv << ["GLSFIELD", 2, order.tzamia2]
        end
        
        #ARTPOS
        main_index = "1"
        index = 10
        #roll guides
        if (order.odoigos != nil)
          @odoigos_color = Color.where(:name => order.color_odoigou).first
          market_price_odoigou = order.price_odoigou - (@pososto_market/100)*order.price_odoigou
          dealer_price_odoigou = order.price_odoigou - (@pososto_dealer/100)*order.price_odoigou
          csv << ["ARTPOS", main_index, index.to_s, 1, "m", @roll_guide.sungate_code, @odoigos_color.sungate_both, 
            order.odoigos, 0, order.up_odigou, "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_odoigou, "no", order.price_odoigou, market_price_odoigou.round(2), dealer_price_odoigou.round(2)]
            index +=10
        end
        #persida
        if (order.persida != nil)
          @persida_color = Color.where(:name => order.color_persidas).first
          market_price_persidas = order.price_persidas - (@pososto_market/100)*order.price_persidas
          dealer_price_persidas = order.price_persidas - (@pososto_dealer/100)*order.price_persidas
          csv << ["ARTPOS", main_index, index.to_s, 1, "m2", @persida.sungate_code, @persida_color.sungate_both, 
            order.persida, order.pl_persidas, order.up_persidas, "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_persidas, "no", order.price_persidas, market_price_persidas.round(2), dealer_price_persidas.round(2)]
            index +=10
        end
        #prostasia
        if (order.prostasia_name != nil)
          market_prostasia_price = order.prostasia_price - (@pososto_market/100)*order.prostasia_price
          dealer_prostasia_price = order.prostasia_price - (@pososto_dealer/100)*order.prostasia_price
          csv << ["ARTPOS", main_index, index.to_s, 1, "m", @prostasia.sungate_code, nil, 
            order.prostasia_name, order.tm_p_prostasia, 0, "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_p_prostasia, "no", order.prostasia_price, market_prostasia_price.round(2), dealer_prostasia_price.round(2)]
          index +=10
        end
        #rolo epik
        if (order.rolo != nil && order.timi_m_epik != nil)
          @rolo_color = Color.where(:name => order.color_rolou).first
          market_price_rolou = order.price_rolou - (@pososto_market/100)*order.price_rolou
          dealer_price_rolou = order.price_rolou - (@pososto_dealer/100)*order.price_rolou
          csv << ["ARTPOS", main_index, index.to_s, 1, "m2", @rolo_epik.sungate_code, @rolo_color.sungate_both, 
            order.rolo, order.pl_rolou_ep, order.up_rolou_ep, "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_epik, "no", order.price_rolou, market_price_rolou.round(2), dealer_price_rolou.round(2)]
          index +=10
        end
        #rolo eks
        if (order.rolo != nil && order.timi_m_ekso != nil)
          @rolo_color = Color.where(:name => order.color_rolou).first
          market_price_rolou = order.price_rolou - (@pososto_market/100)*order.price_rolou
          dealer_price_rolou = order.price_rolou - (@pososto_dealer/100)*order.price_rolou
          csv << ["ARTPOS", main_index, index.to_s, 1, "m2", @rolo_eks.sungate_code, @rolo_color.sungate_both, 
            order.rolo, order.pl_rolou_ek, order.up_rolou_ek, "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_ekso, "no", order.price_rolou, market_price_rolou.round(2), dealer_price_rolou.round(2)]
          index +=10
        end
        #window still
        if (order.window_still != nil)
          market_price_window_still = order.price_window_still - (@pososto_market/100)*order.price_window_still
          dealer_price_window_still = order.price_window_still - (@pososto_dealer/100)*order.price_window_still
          csv << ["ARTPOS", main_index, index.to_s, 1, order.m_window_still, order.window_still_code, nil, 
            order.window_still, "", "", "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_window_still, "no", order.price_window_still, market_price_window_still.round(2), dealer_price_window_still.round(2)]
          index +=10
        end
        #place
        if (order.place != nil)
          market_price_place = order.price_place - (@pososto_market/100)*order.price_place
          dealer_price_place = order.price_place - (@pososto_dealer/100)*order.price_place
          csv << ["ARTPOS", main_index, index.to_s, 1, order.m_place, order.place_code, nil, 
            order.place, "", "", "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_place, "no", order.price_place, market_price_place.round(2), dealer_price_place.round(2)]
          index +=10
        end
        #equipment
        if (order.equipment != nil)
          order.equipment.zip(order.price_equipment).each do |equip, price_equip|
            @equipment1= Equipment.where(:name => equip).first
            if ( !@equipment1.nil? )
              market_price_equipment = price_equip - (@pososto_market/100)*price_equip
              dealer_price_equipment = price_equip - (@pososto_dealer/100)*price_equip
              csv << ["ARTPOS", main_index, index.to_s, 1, "", @equipment1.sungate_code, nil, 
                equip, "", "", "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", price_equip, "no", price_equip, market_price_equipment.round(2), dealer_price_equipment.round(2)]
              index +=10
            end
          end
        end
        #profil typos
        if (order.typos_katw_1 != nil)
          market_price_tupou = order.timi_typos_katw_1 - (@pososto_market/100)*order.timi_typos_katw_1
          dealer_price_tupou = order.timi_typos_katw_1 - (@pososto_dealer/100)*order.timi_typos_katw_1
          csv << ["ARTPOS", main_index, index.to_s, 1, "m", order.typos_code, nil, 
            order.typos_katw_1, order.tm_p_t1, order.tm_u_t1, "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_t_1, "no", order.timi_typos_katw_1, market_price_tupou.round(2), dealer_price_tupou.round(2)]
          index +=10
        end
        #profil deksia
        market_timi_profil_deksia = []
        dealer_timi_profil_deksia = []
        for i in 1..3
          if (order.read_attribute("pd#{i}_code") != nil)
            @prd_color = Color.where(:name => order.color_profil_d).first
            market_timi_profil_deksia[i] = order.read_attribute("timi_profil_deksia_#{i}") - (@pososto_market/100)*order.read_attribute("timi_profil_deksia_#{i}")
            dealer_timi_profil_deksia[i] = order.read_attribute("timi_profil_deksia_#{i}") - (@pososto_dealer/100)*order.read_attribute("timi_profil_deksia_#{i}")

            csv << ["ARTPOS", main_index, index.to_s, order.read_attribute("profil_deksia_arithmos_#{i}"), "m", order.read_attribute("pd#{i}_code"), @prd_color.sungate_both, 
              order.read_attribute("profil_deksia_#{i}"), order.read_attribute("tm_p_pd#{i}"), order.read_attribute("tm_u_pd#{i}"), "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.read_attribute("timi_m_p_d_#{i}"), "no", order.read_attribute("timi_profil_deksia_#{i}"), market_timi_profil_deksia[i].round(2), dealer_timi_profil_deksia[i].round(2)]
            index +=10
          end
        end
        #profil aristera
        market_timi_profil_aristera = []
        dealer_timi_profil_aristera = []
        for i in 1..3
          if (order.read_attribute("pa#{i}_code") != nil)
            @pra_color = Color.where(:name => order.color_profil_a).first
            market_timi_profil_aristera[i] = order.read_attribute("timi_profil_aristera_#{i}") - (@pososto_market/100)*order.read_attribute("timi_profil_aristera_#{i}")
            dealer_timi_profil_aristera[i] = order.read_attribute("timi_profil_aristera_#{i}") - (@pososto_dealer/100)*order.read_attribute("timi_profil_aristera_#{i}")
            csv << ["ARTPOS", main_index, index.to_s, order.read_attribute("profil_aristera_arithmos_#{i}"), "m", order.read_attribute("pa#{i}_code"), @pra_color.sungate_both, 
              order.read_attribute("profil_aristera_#{i}"), order.read_attribute("tm_p_pa#{i}"), order.read_attribute("tm_u_pa#{i}"), "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.read_attribute("timi_m_p_a_#{i}"), "no", order.read_attribute("timi_profil_aristera_#{i}"), market_timi_profil_aristera[i].round(2), dealer_timi_profil_aristera[i].round(2)]
            index +=10
          end
        end
        #profil panw
        market_timi_profil_panw = []
        dealer_timi_profil_panw = []
        for i in 1..3
          if (order.read_attribute("pp#{i}_code") != nil)
            @prp_color = Color.where(:name => order.color_profil_p).first
            market_timi_profil_panw[i] = order.read_attribute("timi_profil_panw_#{i}") - (@pososto_market/100)*order.read_attribute("timi_profil_panw_#{i}")
            dealer_timi_profil_panw[i] = order.read_attribute("timi_profil_panw_#{i}") - (@pososto_dealer/100)*order.read_attribute("timi_profil_panw_#{i}")
            csv << ["ARTPOS", main_index, index.to_s, order.read_attribute("profil_panw_arithmos_#{i}"), "m", order.read_attribute("pp#{i}_code"), @prp_color.sungate_both, 
              order.read_attribute("profil_panw_#{i}"), order.read_attribute("tm_p_pp#{i}"), order.read_attribute("tm_u_pp#{i}"), "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.read_attribute("timi_m_p_p_#{i}"), "no", order.read_attribute("timi_profil_panw_#{i}"), market_timi_profil_panw[i].round(2), dealer_timi_profil_panw[i].round(2)]
            index +=10
          end
        end
        #profil katw
        market_timi_profil_katw = []
        dealer_timi_profil_katw = []
        for i in 1..3
          if (order.read_attribute("pk#{i}_code") != nil)
            @prk_color = Color.where(:name => order.color_profil_k).first
            market_timi_profil_katw[i] = order.read_attribute("timi_profil_katw_#{i}") - (@pososto_market/100)*order.read_attribute("timi_profil_katw_#{i}")
            dealer_timi_profil_katw[i] = order.read_attribute("timi_profil_katw_#{i}") - (@pososto_dealer/100)*order.read_attribute("timi_profil_katw_#{i}")
            csv << ["ARTPOS", main_index, index.to_s, order.read_attribute("profil_katw_arithmos_#{i}"), "m", order.read_attribute("pk#{i}_code"), @prk_color.sungate_both, 
              order.read_attribute("profil_katw_#{i}"), order.read_attribute("tm_p_pk#{i}"), order.read_attribute("tm_u_pk#{i}"), "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.read_attribute("timi_m_p_k_#{i}"), "no", order.read_attribute("timi_profil_katw_#{i}"), market_timi_profil_katw[i].round(2), dealer_timi_profil_katw[i].round(2)]
            index +=10
          end
        end
        
        
      end

      csv << ["FOOT", ""]
      csv << ["END"]
    end
  end
  
end
