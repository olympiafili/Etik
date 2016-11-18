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
  
	def to_csv(options = {:col_sep => ";"})
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
        csv << ["ELEPOS", order.id, order.posotoita, @open_type.code, @open_type.code, order.main_color_id, order.open_type_id, 
          order.width, order.height, order.width_new, order.height_new, @line.sungate_code, order.tzamia0, "<Handle inside>", "<Handle outside>", 
          "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.price_sum]
        
        #ADDOPTPOS
        #roll guides
        if (order.odoigos != nil)
          csv << ["ADDOPTPOS", order.odoigos, "Left/Right", order.up_odigou]
        end
        #persida
        if (order.persida != nil)
          csv << ["ADDOPTPOS", order.persida, "Top", order.pl_persidas]
        end
        #prostasia
        if (order.prostasia_name != nil)
          csv << ["ADDOPTPOS", order.prostasia_name, "<Location>", order.tm_p_prostasia]
        end
        #rolo epik
        if (order.rolo != nil && order.timi_m_epik != nil)
          csv << ["ADDOPTPOS", order.rolo, "Top", order.pl_rolou_ep]
        end
        #rolo eks
        if (order.rolo != nil && order.timi_m_ekso != nil)
          csv << ["ADDOPTPOS", order.rolo, "Top", order.pl_rolou_ek]
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
        main_index = 1
        main_index = main_index.to_s
        index = 1
        #roll guides
        if (order.odoigos != nil)
          csv << ["ARTPOS", main_index, main_index + "." + index.to_s, 1, "m", order.odoigos, order.color_odoigou, 
            order.odoigos, 0, order.up_odigou, "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_odoigou, "no"]
            index +=1
        end
        #persida
        if (order.persida != nil)
          csv << ["ARTPOS", main_index, main_index + "." + index.to_s, 1, "m2", order.persida, order.color_persidas, 
            order.persida, order.pl_persidas, order.up_persidas, "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_persidas, "no"]
            index +=1
        end
        #prostasia
        if (order.prostasia_name != nil)
          csv << ["ARTPOS", main_index, main_index + "." + index.to_s, 1, "m", order.prostasia_name, nil, 
            order.prostasia_name, order.tm_p_prostasia, 0, "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_p_prostasia, "no"]
          index +=1
        end
        #rolo eks
        if (order.rolo != nil && order.timi_m_ekso != nil)
          csv << ["ARTPOS", main_index, main_index + "." + index.to_s, 1, "m2", order.rolo, order.color_rolou, 
            order.rolo, order.pl_rolou_ek, order.up_rolou_ek, "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_ekso, "no"]
          index +=1
        end
        #rolo epik
        if (order.rolo != nil && order.timi_m_epik != nil)
          csv << ["ARTPOS", main_index, main_index + "." + index.to_s, 1, "m2", order.rolo, order.color_rolou, 
            order.rolo, order.pl_rolou_ep, order.up_rolou_ep, "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_epik, "no"]
          index +=1
        end
        #profil typos
        if (order.typos_katw_1 != nil)
          csv << ["ARTPOS", main_index, main_index + "." + index.to_s, 1, "m", order.typos_code, nil, 
            order.typos_katw_1, order.tm_p_t1, order.tm_u_t1, "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.timi_m_t_1, "no"]
          index +=1
        end
        #profil deksia
        for i in 1..3
          if (order.read_attribute("pd#{i}_code") != nil)
            csv << ["ARTPOS", main_index, main_index + "." + index.to_s, order.read_attribute("profil_deksia_arithmos_#{i}"), "m", order.read_attribute("pd#{i}_code"), order.color_profil_d, 
              order.read_attribute("profil_deksia_#{i}"), order.read_attribute("tm_p_pd#{i}"), order.read_attribute("tm_u_pd#{i}"), "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.read_attribute("timi_m_p_d_#{i}"), "no"]
            index +=1
          end
        end
        #profil aristera
        for i in 1..3
          if (order.read_attribute("pa#{i}_code") != nil)
            csv << ["ARTPOS", main_index, main_index + "." + index.to_s, order.read_attribute("profil_aristera_arithmos_#{i}"), "m", order.read_attribute("pa#{i}_code"), order.color_profil_a, 
              order.read_attribute("profil_aristera_#{i}"), order.read_attribute("tm_p_pa#{i}"), order.read_attribute("tm_u_pa#{i}"), "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.read_attribute("timi_m_p_a_#{i}"), "no"]
            index +=1
          end
        end
        #profil panw
        for i in 1..3
          if (order.read_attribute("pp#{i}_code") != nil)
            csv << ["ARTPOS", main_index, main_index + "." + index.to_s, order.read_attribute("profil_panw_arithmos_#{i}"), "m", order.read_attribute("pp#{i}_code"), order.color_profil_p, 
              order.read_attribute("profil_panw_#{i}"), order.read_attribute("tm_p_pp#{i}"), order.read_attribute("tm_u_pp#{i}"), "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.read_attribute("timi_m_p_p_#{i}"), "no"]
            index +=1
          end
        end
        #profil katw
        for i in 1..3
          if (order.read_attribute("pk#{i}_code") != nil)
            csv << ["ARTPOS", main_index, main_index + "." + index.to_s, order.read_attribute("profil_katw_arithmos_#{i}"), "m", order.read_attribute("pk#{i}_code"), order.color_profil_k, 
              order.read_attribute("profil_katw_#{i}"), order.read_attribute("tm_p_pk#{i}"), order.read_attribute("tm_u_pk#{i}"), "<Discount/Surcharge%>", "<Discount/Surcharge per unit>", order.read_attribute("timi_m_p_k_#{i}"), "no"]
            index +=1
          end
        end
        
        
      end

      csv << ["FOOT", ""]
      csv << ["END"]
    end
  end
  
end
