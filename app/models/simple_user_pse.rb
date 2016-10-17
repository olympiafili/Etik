class SimpleUserPse < ActiveRecord::Base
	belongs_to :paraggelia
	#validates :sungate_num, uniqueness: true

	def self.search(search, user_code, all)
	  if ( search && all = !all) 
	  	where("(name LIKE ? OR eponimo LIKE ?) AND dealer_num like ?", "%#{search}%", "%#{search}%", user_code)
	  else
	    where(:dealer_num => user_code)
	  end
	end

	def self.admin_search(search, all1)
	  if ( search && all1 = !all1) 
	  	where("(name LIKE ? OR eponimo LIKE ?)", "%#{search}%", "%#{search}%")
	  else
	    all
	  end
	end
end
