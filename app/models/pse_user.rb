class PseUser < ActiveRecord::Base
	#validates_length_of :phone, :minimum => 10, :maximum => 10
	validates_presence_of :name, :eponimo, :address, :company, :email 

	def self.search_pse(search, user_code, all)
	  if ( search && all = !all) 
	  	where("(name LIKE ? OR eponimo LIKE ?) AND user_id like ?", "%#{search}%", "%#{search}%", user_code)
	  else
	    where(:user_id => user_code)
	  end
	end
end
