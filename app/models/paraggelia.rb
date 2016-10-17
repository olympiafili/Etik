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
end
