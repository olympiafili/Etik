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
        
        #ELEPOS
        @main_color = Color.where(:name => order.main_color_id).first
        csv << ["ELEPOS", order.id, order.posotoita, @open_type.code, @open_type.code, @main_color.sungate_both, order.open_type_id, 
          order.width, order.height, order.width_new, order.height_new, @line.sungate_code, order.tzamia0, "<Handle inside>", "<Handle outside>", 
          "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.price_sum]
          
        #INITIAL_PRICE
        csv << ["INITIAL_PRICE", order.super_apli_timi]
        
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
          csv << ["ARTPOS", main_index, index.to_s, 1, "m", @roll_guide.sungate_code, @odoigos_color.sungate_both, 
            order.odoigos, 0, order.up_odigou, "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_odoigou, "no"]
            index +=10
        end
        #persida
        if (order.persida != nil)
          @persida_color = Color.where(:name => order.color_persidas).first
          csv << ["ARTPOS", main_index, index.to_s, 1, "m2", @persida.sungate_code, @persida_color.sungate_both, 
            order.persida, order.pl_persidas, order.up_persidas, "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_persidas, "no"]
            index +=10
        end
        #prostasia
        if (order.prostasia_name != nil)
          csv << ["ARTPOS", main_index, index.to_s, 1, "m", @prostasia.sungate_code, nil, 
            order.prostasia_name, order.tm_p_prostasia, 0, "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_p_prostasia, "no"]
          index +=10
        end
        #rolo epik
        if (order.rolo != nil && order.timi_m_epik != nil)
          @rolo_color = Color.where(:name => order.color_rolou).first
          csv << ["ARTPOS", main_index, index.to_s, 1, "m2", @rolo_epik.sungate_code, @rolo_color.sungate_both, 
            order.rolo, order.pl_rolou_ep, order.up_rolou_ep, "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_epik, "no"]
          index +=10
        end
        #rolo eks
        if (order.rolo != nil && order.timi_m_ekso != nil)
          @rolo_color = Color.where(:name => order.color_rolou).first
          csv << ["ARTPOS", main_index, index.to_s, 1, "m2", @rolo_eks.sungate_code, @rolo_color.sungate_both, 
            order.rolo, order.pl_rolou_ek, order.up_rolou_ek, "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_ekso, "no"]
          index +=10
        end
        #profil typos
        if (order.typos_katw_1 != nil)
          csv << ["ARTPOS", main_index, index.to_s, 1, "m", order.typos_code, nil, 
            order.typos_katw_1, order.tm_p_t1, order.tm_u_t1, "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_t_1, "no"]
          index +=10
        end
        #profil deksia
        for i in 1..3
          if (order.read_attribute("pd#{i}_code") != nil)
            @prd_color = Color.where(:name => order.color_profil_d).first
            csv << ["ARTPOS", main_index, index.to_s, order.read_attribute("profil_deksia_arithmos_#{i}"), "m", order.read_attribute("pd#{i}_code"), @prd_color.sungate_both, 
              order.read_attribute("profil_deksia_#{i}"), order.read_attribute("tm_p_pd#{i}"), order.read_attribute("tm_u_pd#{i}"), "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.read_attribute("timi_m_p_d_#{i}"), "no"]
            index +=10
          end
        end
        #profil aristera
        for i in 1..3
          if (order.read_attribute("pa#{i}_code") != nil)
            @pra_color = Color.where(:name => order.color_profil_a).first
            csv << ["ARTPOS", main_index, index.to_s, order.read_attribute("profil_aristera_arithmos_#{i}"), "m", order.read_attribute("pa#{i}_code"), @pra_color.sungate_both, 
              order.read_attribute("profil_aristera_#{i}"), order.read_attribute("tm_p_pa#{i}"), order.read_attribute("tm_u_pa#{i}"), "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.read_attribute("timi_m_p_a_#{i}"), "no"]
            index +=10
          end
        end
        #profil panw
        for i in 1..3
          if (order.read_attribute("pp#{i}_code") != nil)
            @prp_color = Color.where(:name => order.color_profil_p).first
            csv << ["ARTPOS", main_index, index.to_s, order.read_attribute("profil_panw_arithmos_#{i}"), "m", order.read_attribute("pp#{i}_code"), @prp_color.sungate_both, 
              order.read_attribute("profil_panw_#{i}"), order.read_attribute("tm_p_pp#{i}"), order.read_attribute("tm_u_pp#{i}"), "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.read_attribute("timi_m_p_p_#{i}"), "no"]
            index +=10
          end
        end
        #profil katw
        for i in 1..3
          if (order.read_attribute("pk#{i}_code") != nil)
            @prk_color = Color.where(:name => order.color_profil_k).first
            csv << ["ARTPOS", main_index, index.to_s, order.read_attribute("profil_katw_arithmos_#{i}"), "m", order.read_attribute("pk#{i}_code"), @prk_color.sungate_both, 
              order.read_attribute("profil_katw_#{i}"), order.read_attribute("tm_p_pk#{i}"), order.read_attribute("tm_u_pk#{i}"), "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.read_attribute("timi_m_p_k_#{i}"), "no"]
            index +=10
          end
        end
        
        
      end

      csv << ["FOOT", ""]
      csv << ["END"]
    end
  end
  
end
