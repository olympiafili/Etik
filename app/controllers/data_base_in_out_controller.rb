class DataBaseInOutController < ApplicationController

	#before_action :authenticate_user!, except: [:add_users, :main_controll_panel]

	layout "panel"

	def main_controll_panel
	end

	def dashboard
		@paraggelies = Paraggelia.all

        @paraggelies = Paraggelia.search_admin(params[:search],params[:all])

		if( !params[:customer].nil? )
            #@paraggelies = Paraggelia.all.order("created_at").reverse
            #########@paraggelies = Paraggelia.search(params[:search],params[:customer],params[:all])
    	end
    	if( params[:customer] == "0" )
            #@paraggelies = Paraggelia.all
    	end

    
    	if(params[:order] == "price_low")
            @paraggelies = Paraggelia.all.order("sum")
    	end
    	if(params[:order] == "price_high")
            @paraggelies = Paraggelia.all.order("sum").reverse
    	end
    	if(params[:order] == "code_low")
            @paraggelies = Paraggelia.all.order("id")
    	end
    	if(params[:order] == "code_high")
            @paraggelies = Paraggelia.all.order("id").reverse
    	end
    	if(params[:order] == "date_old")
            @paraggelies = Paraggelia.all.order("created_at")
    	end
    	if(params[:order] == "date_new")
            @paraggelies = Paraggelia.all.order("created_at").reverse
    	end
    	if(params[:order] == "name_a")
    		@paraggelies = Paraggelia.all.order("eponimo")
    	end
    	if(params[:order] == "name_z")
    		@paraggelies = Paraggelia.all.order("eponimo").reverse
    	end
	end

	def users
		@users = User.all
	end

	def find_user
		@user = User.where(:id => params[:id]).first
		respond_to do |format|
          format.json { render json: @user.to_json}
        end
	end

	def update_user
		id = params[:id]
		name = params[:name]
		email = params[:email]
		password = params[:password]
        if ( password.blank? && !name.blank? && !email.blank? )
        	user = User.where(:id => params[:id]).first
        	user.email = email
        	user.sungate_name = name
        	user.save(:validate => false)
        else
        end
        redirect_to data_base_in_out_users_path
	end

	def clients
		#@clients = SimpleUserPse.all

		@clients = SimpleUserPse.admin_search(params[:search],params[:all])
	end

	require 'csv'

	def add_users
		CSV.foreach("#{Rails.root}/public/sungate_csv/users.csv", col_sep: ';',encoding: 'iso-8859-1', headers:true) do |row|
			if ( User.exists?(:sungate_code => row['Sungate code']) )
				user_id = User.where(:sungate_code => row['Sungate code']).first.id
				User.where(:sungate_code => row['Sungate code']).first.delete
				User.new({:id => user_id, :email => row['Sungate code']+"@gmail.com", :sungate_code => row['Sungate code'], :sungate_name => row['Name'], :password => "12345678", :password_confirmation => "12345678",:confirmed_at => Time.now }).save(:validate => false)
			else
				User.new({:email => row['Sungate code']+"@gmail.com", :sungate_code => row['Sungate code'], :sungate_name => row['Name'], :password => "12345678", :password_confirmation => "12345678",:confirmed_at => Time.now }).save(:validate => false)
			end
		end 
		redirect_to data_base_in_out_main_controll_panel_path
		
	end

end
