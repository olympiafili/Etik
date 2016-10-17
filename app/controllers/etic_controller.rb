class EticController < ApplicationController

    ## Kati gia session
	skip_before_filter :verify_authenticity_token, :only => [:update]

    ## Για καθε url που παταω με το χερι, δεν πηγενει το site γιατι πρεπει πρωτα να κανεις log in.
    ## Εκτος αν αλλαξω γλωσσα που γίνεται και στην αρχικη σελιδα του log in.
	before_action :authenticate_user!, except: [:language, :contact, :send_mail]

	layout "app", :only => [:home, :material, :leaf, :open_type, :elefthero, :color, :diastaseis, :extra, :simple_pse_user_card, :user_diax, :select_customer, :new_user]

    ## Αλλαγη γλωσσας. Γενικα εχω ένα session[:locale] απο το application_controller.
    ## Αν αλλαξει η γλωσσα την αλλαζω με τα if. 
	def language
	  if ( params[:lang] == "en" )
	    I18n.locale = 'en'
	    session[:locale] = "en"
	  end
	  if ( params[:lang] == "gr" )
	    I18n.locale = 'gr'
	    session[:locale] = "gr"
	  end
	  if ( params[:lang] == "de" )
	    I18n.locale = 'de'
	    session[:locale] = "de"
	  end
	  I18n.locale = session[:locale]
	  if current_user
	  	redirect_to :back
	  else
	  	redirect_to root_path
	  end
	end

    ## CONTACT: Η σελίδα που βλέπω όταν πατάω contact στην μπαρα
    ## SEND_MAIL: Η μέθοδος που στέλνει mail στον admin. UserMailer -> class, welcome_email -> method
	def contact
	end

	def send_mail
		user_info = {:email_user => params[:email], :username => params[:onoma], :number => params[:arithmos], :message => params[:koimeno], :aiteria => params[:company], :epitheto => params[:surname]} 
        UserMailer.welcome_email(user_info).deliver #this will deliver the mail
        #redirect_to root_path, alert: "Watch it, mister!"
	end

    ## Μέθοδος που καλείτε απο το view etic_card όταν παταω + σε κουφωμα για νέο χρήστη.
    ## Κραταει το id του pseudo user που πατησα + σε καθοληκή μεταβλητή $pseUserId  
	def pse_user
		#$pseUserId = params[:pse_user]
		session[:pseUserId] = params[:pse_user]
		redirect_to etic_home_path 
	end

	def simple_pse_user
		#$pseUserId_2 = params[:pse_user]
		#$paraggelia_simple = params[:paraggelia_id]
		session[:paraggelia_simple] = params[:paraggelia_id] #To id της παραγγελίας
		session[:pseUserId] = params[:pse_user] #Το id αν ειμαι με admin για τους user του admin
		session[:dealer_id] = params[:admin] #Το id του dealer αν κανει + ο admin σε παραγγελία
		redirect_to etic_extra_path
	end

    ## Αρχική σελίδα μετα το log in. 
    ## Παραθέτω ολα τα ανοίγματα.
	def home
		@cat_anoigmatos = OpenCategorie.all
	end

    ## Κρατάω ολες τις μεταβήτές που εχω ήδη πατήσει απο πριν με @.
    ## Διχνω ολα τα υλικά 
    ## Το σύμβολο ? ειναι για να δημιουργήσω url με το back button του browser.
    ## Έχω πρόβλημα με το back, κανει κατι ακαταλαβήστηκα.
    ## Η σελίδα αυτη χρησιμοποιεί τις μεθόδους kataskevastes, system, line και παίρνει δεδομένα απο αυτες σε json φορματ
	def material
		@open_categorie = params[:open_categorie]
        @uliko = Material.all
        @sumbol = "?"

        ti_vgike = 0

        respond_to do |format|
          format.json { render json: ti_vgike.to_json}
        end
	end

	def kataskevastes
		material = Material.where(:id => params[:material_id]).first
		constructors = []
		constructors << material.constructors.to_s.split(",")
		@kata = Constructor.where(:id => constructors)

		respond_to do |format|
          format.json { render json: @kata.to_json}
        end
	end

	def system
		kata_extra = Constructor.where(:name => params[:constructor_id]).first
		@open_categorie = OpenCategorie.where(:name => params[:open_categorie_name]).first
    
		systems = []
    if(@open_categorie.systems != nil)
      systems << @open_categorie.systems.to_s.split(",")
    else
      systems << kata_extra.systems.to_s.split(",")
    end
		@system = System.where(:id => systems)

		respond_to do |format|
      format.json { render json: @system.to_json}
    end
	end

	def line
		system = System.where(:id => params[:system_id]).first
		lines = []
		lines << system.lines.to_s.split(",")
		@line = Line.where(:id => lines)

		respond_to do |format|
          format.json { render json: @line.to_json}
        end
	end

    ## Η σελίδα αυτή εμφανίζει την επιλογή φύλλων.
    ## Κρατάω ολες τις μεταβήτές που εχω ήδη πατήσει απο πριν με @.
    ## Το σύμβολο ? ειναι για να δημιουργήσω url με το back button του browser.
    ## Έχω πρόβλημα με το back, κανει κατι ακαταλαβήστηκα.
	def leaf
		@sumbol = "?"
		@open_categorie_id = params[:cat_anoigma_gia_porta]
		@open_categorie = OpenCategorie.where(:id => params[:cat_anoigma_gia_porta]).first
		@material = Material.where(:id => params[:material_id]).first
		@constructor = Constructor.where(:id => params[:constructor_id]).first
		@system = System.where(:id => params[:system_id]).first
		@line = Line.where(:id => params[:line_id]).first

		leafs = []
		leafs << @open_categorie.leaf.to_s.split(",")

		@leaf = Leaf.where(:id => leafs)

		respond_to do |format|
          format.json { render json: @leaf.to_json}
        end
	end
  
	def leaf2
		@open_categorie = OpenCategorie.where(:name => params[:open_categorie_name]).first

		leafs = []
		leafs << @open_categorie.leaf.to_s.split(",")

		@leaf = Leaf.where(:id => leafs)

		respond_to do |format|
      format.json { render json: @leaf.to_json}
    end
	end

    ## Σε αυτην την σελίδα προβάλω τους τύπους ανοίγματος.
    ## Αρχικα κάνω το join τα open_type με τα line 
    ## Και μετά απο αυτα που βρηκα διαλέγω αυτα με τα αντιστοιχα φυλλα και κατηγορια που διαλεξα. 
	def open_type
		@open_categorie = OpenCategorie.where(:name => params[:open_categorie_name]).first
		#@material = Material.where(:name => params[:material_name]).first
		@material = Material.where(:id => params[:material_name]).first
		@constructor = Constructor.where(:name => params[:constructor_name]).first
		@system = System.where(:name => params[:system_name]).first
		@line = Line.where(:name_allo => params[:line_name]).first
		@leaf = Leaf.where(:name => params[:leaf_name]).first
		##
		#@open_type = OpenType.joins(:system_open_types).where(["system_open_types.line_id = ?", @line.id]).order(:order)
		#@open_type1 = @open_type.where(:leaf_id => @leaf.id, :open_categorie_id => @open_categorie.id)

		line = Line.where(:id => @line.id).first
		open_t = []
		open_t << line.open_types.to_s.split(",")
		@open_type = OpenType.where(:id => open_t).order(:order)
		@open_type1 = @open_type.where(:leaf_id => @leaf.id, :open_categorie_id => @open_categorie.id)

		respond_to do |format|
          format.json { render json: @open_type1.to_json}
        end
        
	end

	def anoigma
		@anoigma = OpenType.where(:table => params[:anoigma]).first
		@min_width_anoigmatos = @anoigma.min_width
		@min_height_anoigmatos = @anoigma.min_height
		@max_width_anoigmatos = @anoigma.max_width
		@max_height_anoigmatos = @anoigma.max_height

		@response = {:min_width_anoigmatos => @min_width_anoigmatos, :min_height_anoigmatos => @min_height_anoigmatos, :max_width_anoigmatos => @max_width_anoigmatos, :max_height_anoigmatos => @max_height_anoigmatos}
        respond_to do |format|
          format.json { render json: @response.to_json}
        end
	end


	def elefthero
		@open_categorie = OpenCategorie.where(:name => params[:open_categorie_name]).first
		@material = Material.where(:name => params[:material_name]).first
		@constructor = Constructor.where(:name => params[:constructor_name]).first
		@system = System.where(:name => params[:system_name]).first
		@line = Line.where(:name => params[:line_name]).first
		@leaf = Leaf.where(:name => params[:leaf_name]).first
		@open_type = OpenType.where(:name => params[:open_type_name]).first
	end

    ## Εμφανίζω τα color ανάλωγα με την κατηγορία. Αυτη η σελίδα χρησιμοποιει και τις μεθοδους
    ## color_kasas και color_fulou. Αν αλλάξουν τα χρώματα απλα κάνω ενα νέο πινακα και συνδέω αυτον.
	def color
		#@open_categorie = OpenCategorie.where(:name => params[:open_categorie_name]).first
		#@material = Material.where(:name => params[:material_name]).first
		#@constructor = Constructor.where(:name => params[:constructor_name]).first
		#@system = System.where(:name => params[:system_name]).first
		#@line = Line.where(:name => params[:line_name]).first
		#@leaf = Leaf.where(:name => params[:leaf_name]).first
		#@open_type = OpenType.where(:name => params[:open_type_name]).first
		##
		@material = Material.where(:id => params[:material_id]).first

		colors_team_id = []
	    colors_team_id << @material.color_team.to_s.split(",")
	    @oles_oi_omades_xrwmatos = ColorTeam.where(:id => colors_team_id)

		colors_white = []
		colors_white << @oles_oi_omades_xrwmatos.first.colors.to_s.split(",")
		@name_A = @oles_oi_omades_xrwmatos.first
		@color_A = Color.where(:id => colors_white)

		colors_simple = []
		colors_simple << @oles_oi_omades_xrwmatos.second.colors.to_s.split(",")
		@name_B = @oles_oi_omades_xrwmatos.second
		@color_B = Color.where(:id => colors_simple)

		colors_extra = []
		colors_extra << @oles_oi_omades_xrwmatos.third.colors.to_s.split(",")
		@name_C = @oles_oi_omades_xrwmatos.third
		@color_C = Color.where(:id => colors_extra)
		#@colors_0 = Color.where(:katigoria => 0)
		#@colors_standar = Color.where(:katigoria => 1)
		#@colors_extra = Color.where(:katigoria => 2)
		@response = {:name_A => @name_A, :name_B => @name_B, :name_C => @name_C, :color_A => @color_A, :color_B => @color_B, :color_C => @color_C}
        respond_to do |format|
          format.json { render json: @response.to_json}
        end
	end

	def corol_kasas
		@colors = Color.all
		respond_to do |format|
          format.json { render json: @colors.to_json}
        end
	end

	def color_fulou
		@colors = Color.all
		respond_to do |format|
          format.json { render json: @colors.to_json}
        end
	end

    ## Σε αυτην την σελίδα δίνω με @ ολες τις μεταβλητές που χρειάζονται στο πινακακι αριστερα.
    ## Ακόμη δίνω το max και min, width και height.
	def diastaseis
        @open_categorie = OpenCategorie.where(:name => params[:open_categorie_name]).first
		@material = Material.where(:name => params[:material_name]).first
		@constructor = Constructor.where(:name => params[:constructor_name]).first
		@system = System.where(:name => params[:system_name]).first
		@line = Line.where(:name => params[:line_name]).first
		@leaf = Leaf.where(:name => params[:leaf_name]).first
		@open_type = OpenType.where(:name => params[:open_type_name]).first
		@color = Color.where(:name => params[:color_name]).first
		@mesa_eksw = params[:mesa_eksw]
		##if params exists ΚΑΝΟΝΙΚΑ
		@color_deksia = Color.where(:name => params[:coldeksia]).first
		@color_aristera = Color.where(:name => params[:colaristera]).first
		@color_panw = Color.where(:name => params[:colpanw]).first
		@color_katw = Color.where(:name => params[:colkatw]).first
		@color_fulou = Color.where(:name => params[:colfullo]).first
		########
		@max_width = @open_type.max_width
		@min_width = @open_type.min_width
		@max_height = @open_type.max_height
		@min_height = @open_type.min_height
		@table = @open_type.table

		@response = {:max_width => @max_width, :min_width => @min_width, :max_height => @max_height, :min_height => @min_height, :table => @table}
        respond_to do |format|
          format.json { render json: @response.to_json}
        end
	end

    ## Η σελίδα extra προβάλει όλα τα extra που μπορει να πάρει ένα κούφωμα. 
    ## Αρχικά δίνω τα extra που θέλω.
    ## Μετά δίνω αυτα που πάτησα απο πρίν για το πινακάκι το κόκκινο.
    ## Η σελίδα αυτη χρισημοποιεί τις παρακάτω μεθόδους --->
    ## epikathimena, color_epikathimenou, eksoterika, color_eksoterikou, color_persidas, color_odoigou, tzamia, color_typos, color_profil.
    ## Όλες αυτές τις μεθόδους τις έχω για να πέρνω δεδομένα σε json format.
	def extra
       @cat_anoigmatos = OpenCategorie.all.limit(3)
       @uliko = Material.all

       ##Κοκκινο πινακάκι
        if( params.has_key?(:open_categorie_name) )
		    @open_categorie = OpenCategorie.where(:name => params[:open_categorie_name]).first
		else
			@open_categorie = OpenCategorie.first
			@den_exw_parrams = 1
		end
		if( params.has_key?(:material_name) )
		    @material = Material.where(:name => params[:material_name]).first
		else
			@material = Material.where(:default => 1).first
		end
		if( params.has_key?(:constructor_name) )
		    @constructor = Constructor.where(:name => params[:constructor_name]).first
		else
			@constructor = Constructor.first
		end
		if( params.has_key?(:system_name) )
		    @system = System.where(:name => params[:system_name]).first
		    @sys = 1
		else
			@system = System.first
			@sys = 0
		end
		if( params.has_key?(:line_name) )
		    @line = Line.where(:name => params[:line_name]).first
		else
			@line = Line.first
		end
		if( params.has_key?(:leaf_name) )
		    @leaf_epilegmeno = Leaf.where(:name => params[:leaf_name]).first
		    #@leaf = Leaf.joins(:open_categorie_leafs).where(["open_categorie_leafs.open_categorie_id = ?", @open_categorie.id])
		    open_cat_gia_leaf = OpenCategorie.where(:id => @open_categorie.id).first
		    leaf = []
		    leaf << open_cat_gia_leaf.leaf.to_s.split(",")
		    @leaf = Leaf.where(:id => leaf)
		else
			open_cat_gia_leaf = OpenCategorie.where(:id => @open_categorie.id).first
		    leaf = []
		    leaf << open_cat_gia_leaf.leaf.to_s.split(",")
		    @leaf = Leaf.where(:id => leaf)
			#@leaf = Leaf.limit(3)
			@leaf_epilegmeno = Leaf.first
		end
		if( params.has_key?(:leaf_name) )
			#@open_type = OpenType.joins(:system_open_types).where(["system_open_types.line_id = ?", @line.id]).order(:order)
		    line = Line.where(:id => @line.id).first
			open_t = []
			open_t << line.open_types.to_s.split(",")
			@open_type = OpenType.where(:id => open_t).order(:order)
		    @open_type1 = @open_type.where(:leaf_id => @leaf_epilegmeno.id, :open_categorie_id => @open_categorie.id)
		    @open_type_epilegmeno = OpenType.where(:name => params[:open_type_name]).first
		else
			#@open_type = OpenType.joins(:system_open_types).where(["system_open_types.line_id = ?", @line.id]).order(:order)
			line = Line.where(:id => @line.id).first
			open_t = []
			open_t << line.open_types.to_s.split(",")
			@open_type = OpenType.where(:id => open_t).order(:order)
			@open_type1 = @open_type.where(:leaf_id => @leaf.first.id, :open_categorie_id => @open_categorie.id)
			@open_type_epilegmeno = OpenType.first
		end
		if( params.has_key?(:color_name) && params.has_key?(:color_eksw_name) )
			colors_team_id = []
		    colors_team_id << @material.color_team.to_s.split(",")
		    @oles_oi_omades_xrwmatos = ColorTeam.where(:id => colors_team_id)

			colors_white = []
			colors_white << @oles_oi_omades_xrwmatos.first.colors.to_s.split(",")
			#@name_A = @oles_oi_omades_xrwmatos.first.color_team_name
			@color_A = Color.where(:id => colors_white)

			colors_simple = []
			colors_simple << @oles_oi_omades_xrwmatos.second.colors.to_s.split(",")
			#@name_B = @oles_oi_omades_xrwmatos.second.color_team_name
			@color_B = Color.where(:id => colors_simple)

			colors_extra = []
			colors_extra << @oles_oi_omades_xrwmatos.third.colors.to_s.split(",")
			#@name_C = @oles_oi_omades_xrwmatos.third.color_team_name
			@color_C = Color.where(:id => colors_extra)

		    @color = Color.where(:name => params[:color_name]).first
		    @color_eksw = Color.where(:name => params[:color_eksw_name]).first

		    @colors_0 = Color.where(:katigoria => 0)
		    @colors_standar = Color.where(:katigoria => 1)
		    @colors_extra = Color.where(:katigoria => 2)
		    @mesa_eksw = params[:mesa_eksw]
		else
			colors_team_id = []
		    colors_team_id << @material.color_team.to_s.split(",")
		    @oles_oi_omades_xrwmatos = ColorTeam.where(:id => colors_team_id)

			colors_white = []
			colors_white << @oles_oi_omades_xrwmatos.first.colors.to_s.split(",")
			#@name_A = @oles_oi_omades_xrwmatos.first.color_team_name
			@color_A = Color.where(:id => colors_white)

			colors_simple = []
			colors_simple << @oles_oi_omades_xrwmatos.second.colors.to_s.split(",")
			#@name_B = @oles_oi_omades_xrwmatos.second.color_team_name
			@color_B = Color.where(:id => colors_simple)

			colors_extra = []
			colors_extra << @oles_oi_omades_xrwmatos.third.colors.to_s.split(",")
			#@name_C = @oles_oi_omades_xrwmatos.third.color_team_name
			@color_C = Color.where(:id => colors_extra)
			###########
			@color = Color.first
			@color_eksw = Color.first

			@colors_0 = Color.where(:katigoria => 0)
		    @colors_standar = Color.where(:katigoria => 1)
		    @colors_extra = Color.where(:katigoria => 2)
		    @mesa_eksw = 2
		end

		if( params.has_key?(:metra_click) )
		    @metra_click = 1
		else
			@metra_click = 0
		end

		if( params.has_key?(:width) )
			@width = "%.0f" % params[:width]
			width = params[:width].to_f
			@width_new = width
			session[:width] = width
		end
		if( params.has_key?(:height) )
			@height = "%.0f" % params[:height]
			height = params[:height].to_f
            @height_new = height 
            session[:height] = height
		end
		#@xwrisma1 = params[:xwrisma1]
		#@xwrisma2 = params[:xwrisma2]
		#@xwrisma3_1 = params[:xwrisma3_1]
		#@xwrisma3_2 = params[:xwrisma3_2]
		#@xwrisma3_3 = params[:xwrisma3_3]
		#@xwrisma_y_1 = params[:xwrisma_y_1]
		#@xwrisma_y_2 = params[:xwrisma_y_2]
		## if params exists ΚΑΝΟΝΙΚΑ
		#@color_deksia = Color.where(:name => params[:color_deksia]).first
		#@color_aristera = Color.where(:name => params[:color_aristera]).first
		#@color_panw = Color.where(:name => params[:color_panw]).first
		#@color_katw = Color.where(:name => params[:color_katw]).first
		#@color_fulou = Color.where(:name => params[:color_fulou]).first
		@posotita = 1#params[:posotita].to_i
		## Το $height και $width δεν τα χρησιμοποιώ λογικά!!
		#@lastixo = params[:lastixo]

		@epikathimena_cat = Epikathimeno.all
		@eksoteriko_cat = Eksoterika.all
		@persides = Persides.all
		#Glass
		@cat_tzamia0 = GlassCatInOut.all
		@cat_tzamia1 = GlassCatIn.all
		@cat_tzamia2 = GlassCatOut.all
		#
		@prostasia = TypoiProstasia.all
		@typos = Profil.where(:width => 0)
		@profil = Profil.where.not(:width => 0)
		@roll_guide = RollGuide.all.order(:order)
		@order = Order.where(:id => params[:order]).first
		if !@order.nil?
			@order = Order.where(:id => params[:order]).first
		else
			@order = 0
		end
		if params.has_key?(:diorthosi)
			session[:diorthosi] = @order.id
		else
			session[:diorthosi] = "0"
		end
		if params.has_key?(:pse_user)
			#$pseUserId = params[:pse_user]
			session[:pseUserId] = params[:pse_user]
		end
		if params.has_key?(:paraggelia_id)
			#$paraggelia_simple = params[:paraggelia_id]
			session[:paraggelia_simple] = params[:paraggelia_id]
			session[:dealer_id] = params[:dealer_id]
		end
		#Kanw sort ta kougwmata alla den to theloume
	    @items_apo_idia_paraggelia = Order.where(:paraggelia_id => session[:paraggelia_simple]).order("aukson")
        counter_an_uparxoun_kai_alla = Order.where(:paraggelia_id => session[:paraggelia_simple]).count
        if ( counter_an_uparxoun_kai_alla != 0 )
        	last_aukson = Order.where(:paraggelia_id => session[:paraggelia_simple]).order("aukson").last.aukson
        end
        @lista_me_ok_aukson = []
        counter_gia_ok = 0
        if ( counter_an_uparxoun_kai_alla != 0 )
        	for i in 1..last_aukson
        		@items_apo_idia_paraggelia.order("aukson").each do |item|
        			if ( item.aukson != i)
        				counter_gia_ok = counter_gia_ok + 1
        			end
        		end
        		if ( counter_gia_ok == counter_an_uparxoun_kai_alla )
        			@lista_me_ok_aukson << i 
        		end
        		counter_gia_ok = 0
			end
			@lista_me_ok_aukson << last_aukson + 1
        else
        	@lista_me_ok_aukson << 1
        end
        @lista_me_ok_aukson.reverse!
		#EXTRA gia epanalipsi
		@lastixa = params[:lastixa]
		tzami0 = Tzamia.where(:name => params[:tzamia0]).first
		if ( !tzami0.nil? )
			@tzami0_id = tzami0.id
		    @tzami0_cat = params[:cat_tzamia0]
        end
		tzami = Tzamia.where(:name => params[:tzamia]).first
		if ( !tzami.nil? )
			@tzami_id = tzami.id
		    @tzami_cat = params[:cat_tzamia1]
        end
        tzami2 = Tzamia.where(:name => params[:tzamia2]).first
		if ( !tzami2.nil? )
			@tzami2_id = tzami2.id
		    @tzami2_cat = params[:cat_tzamia2]
        end
		rolo = RolaEkso.where(:name => params[:rolo_name]).first
        cat_rolo = "ekso"
        if ( rolo.nil? )
                rolo = RolaEpik.where(:name => params[:rolo_name]).first
                cat_rolo = "epik"
        end
        if ( !rolo.nil? &&  cat_rolo == "ekso" )
                @cat_rolo = Eksoterika.where(:id => rolo.rola_ekso_id).first.id
                @rolo_id = rolo.id
                @ti_rolo = "ekso"
                @color_rolo = RolaColor.where(:name => params[:xrwma_rolo]).first.name
                @pl_rolou_ek = params[:pl_rolou_ek]
                @up_rolou_ek = params[:up_rolou_ek]
                @kinisi_deksia_aristera = params[:kinisi_deksia_aristera]
                @deroll = params[:deroll]
        else
        	@pl_rolou_ep = 0
			@up_rolou_ep = 0
        end
        if ( !rolo.nil? &&  cat_rolo == "epik" )
                @cat_rolo = Epikathimeno.where(:id => rolo.epikathimeno_id).first.id
                @rolo_id = rolo.id
                @ti_rolo = "epik"
                @color_rolo = RolaColor.where(:name => params[:xrwma_rolo]).first.name
                @pl_rolou_ep = params[:pl_rolou_ep]
                @up_rolou_ep = params[:up_rolou_ep]
                @kinisi_deksia_aristera = params[:kinisi_deksia_aristera]
                @klap_ep = params[:klap_ep]
        else
        	@pl_rolou_ek = 0
			@up_rolou_ek = 0
        end

		persida = Persides.where(:name => params[:persida]).first
        if ( !persida.nil? )
			@persida_id = persida.id
		    @color_persida = RolaColor.where(:name => params[:xrwma_persidas]).first.name
		    @pl_persidas = params[:pl_persidas]
            @up_persidas = params[:up_persidas]
        else
        	@pl_persidas = 0
			@up_persidas = 0
        end
        odoigos = RollGuide.where(:name => params[:odoigos]).first
        if ( !odoigos.nil? )
			@odoigos_id = odoigos.id
		    @color_odoigou = RolaColor.where(:name => params[:xrwma_odoigou]).first.name
            @up_odoigou = params[:up_odigou].to_f / 2
        else
        	@up_odoigou = 0
        end
        prostasia = TypoiProstasia.where(:name => params[:prostasia]).first
        if ( !prostasia.nil? )
			@prostasia_id = prostasia.id
		    #@color_odoigou = RolaColor.where(:name => params[:xrwma_odoigou]).first.name
        end
        typos = Profil.where(:width => 0, :name => params[:typos]).first
        if ( !typos.nil? )
			@typos_id = typos.id
		    @color_typos = RolaColor.where(:name => params[:typos_col]).first.name
		    @typos_arithmos = 1
        end
        @counter_profil = 0
        @counter_profil_ar = 0
        pr_ar_1 = Profil.where(:name => params[:pr_ar_1]).first
        if ( !pr_ar_1.nil? )
			@pr_ar_1_id = pr_ar_1.id
			@epilogi_ar_1 = pr_ar_1.width
		    @color_ar = RolaColor.where(:name => params[:col_ar]).first.name
		    @pr_ar_1_ar = params[:pr_ar_1_ar]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_ar_2 = Profil.where(:name => params[:pr_ar_2]).first
        if ( !pr_ar_2.nil? )
			@pr_ar_2_id = pr_ar_2.id
			@epilogi_ar_2 = pr_ar_2.width
		    @color_ar = RolaColor.where(:name => params[:col_ar]).first.name
		    @pr_ar_2_ar = params[:pr_ar_2_ar]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_ar_3 = Profil.where(:name => params[:pr_ar_3]).first
        if ( !pr_ar_3.nil? )
			@pr_ar_3_id = pr_ar_3.id
			@epilogi_ar_3 = pr_ar_3.width
		    @color_ar = RolaColor.where(:name => params[:col_ar]).first.name
		    @pr_ar_3_ar = params[:pr_ar_3_ar]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_de_1 = Profil.where(:name => params[:pr_de_1]).first
        if ( !pr_de_1.nil? )
			@pr_de_1_id = pr_de_1.id
			@epilogi_de_1 = pr_de_1.width
		    @color_de = RolaColor.where(:name => params[:col_de]).first.name
		    @pr_de_1_de = params[:pr_de_1_de]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_de_2 = Profil.where(:name => params[:pr_de_2]).first
        if ( !pr_de_2.nil? )
			@pr_de_2_id = pr_de_2.id
			@epilogi_de_2 = pr_de_2.width
		    @color_de = RolaColor.where(:name => params[:col_de]).first.name
		    @pr_de_2_de = params[:pr_de_2_de]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_de_3 = Profil.where(:name => params[:pr_de_3]).first
        if ( !pr_de_3.nil? )
			@pr_de_3_id = pr_de_3.id
			@epilogi_de_3 = pr_de_3.width
		    @color_de = RolaColor.where(:name => params[:col_de]).first.name
		    @pr_de_3_de = params[:pr_de_3_de]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_pa_1 = Profil.where(:name => params[:pr_pa_1]).first
        if ( !pr_pa_1.nil? )
			@pr_pa_1_id = pr_pa_1.id
			@epilogi_pa_1 = pr_pa_1.width
		    @color_pa = RolaColor.where(:name => params[:col_pa]).first.name
		    @pr_pa_1_pa = params[:pr_pa_1_pa]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_pa_2 = Profil.where(:name => params[:pr_pa_2]).first
        if ( !pr_pa_2.nil? )
			@pr_pa_2_id = pr_pa_2.id
			@epilogi_pa_2 = pr_pa_2.width
		    @color_pa = RolaColor.where(:name => params[:col_pa]).first.name
		    @pr_pa_2_pa = params[:pr_pa_2_pa]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_pa_3 = Profil.where(:name => params[:pr_pa_3]).first
        if ( !pr_pa_3.nil? )
			@pr_pa_3_id = pr_pa_3.id
			@epilogi_pa_3 = pr_pa_3.width
		    @color_pa = RolaColor.where(:name => params[:col_pa]).first.name
		    @pr_pa_3_pa = params[:pr_pa_3_pa]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_ka_1 = Profil.where(:name => params[:pr_ka_1]).first
        if ( !pr_ka_1.nil? )
			@pr_ka_1_id = pr_ka_1.id
			@epilogi_ka_1 = pr_ka_1.width
		    @color_ka = RolaColor.where(:name => params[:col_ka]).first.name
		    @pr_ka_1_ka = params[:pr_ka_1_ka]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_ka_3 = Profil.where(:name => params[:pr_ka_3]).first
        if ( !pr_ka_3.nil? )
			@pr_ka_3_id = pr_ka_3.id
			@epilogi_ka_3 = pr_ka_3.width
		    @color_ka = RolaColor.where(:name => params[:col_ka]).first.name
		    @pr_ka_3_ka = params[:pr_ka_3_ka]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_ka_2 = Profil.where(:name => params[:pr_ka_2]).first
        if ( !pr_ka_2.nil? )
			@pr_ka_2_id = pr_ka_2.id
			@epilogi_ka_2 = pr_ka_2.width
		    @color_ka = RolaColor.where(:name => params[:col_ka]).first.name
		    @pr_ka_2_ka = params[:pr_ka_2_ka]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end

        
	end

	def extra_json
		if( params.has_key?(:open_cat) )
		    @open_categorie = OpenCategorie.where(:name => params[:open_cat]).first
		end
		puts "KALOOO"+ params[:open_cat]
		@lastixa = params[:lastixa]
		tzami0 = Tzamia.where(:id => params[:tzamia0]).first
		if ( !tzami0.nil? )
			@tzami0_id = tzami0.id
		    @tzami0_cat = params[:cat_tzamia0]
        end
		tzami = Tzamia.where(:id => params[:tzamia]).first
		if ( !tzami.nil? )
			@tzami_id = tzami.id
		    @tzami_cat = params[:cat_tzamia]
        end
        tzami2 = Tzamia.where(:id => params[:tzamia2]).first
		if ( !tzami2.nil? )
			@tzami2_id = tzami2.id
		    @tzami2_cat = params[:cat_tzamia2]
        end
		
        if ( params[:cat_rolo] == "ekso" )
        	    rolo = RolaEkso.where(:id => params[:rolo_name]).first
                @cat_rolo = Eksoterika.where(:id => rolo.rola_ekso_id).first.id
                @rolo_id = rolo.id
                @ti_rolo = "ekso"
                @color_rolo = RolaColor.where(:name => params[:xrwma_rolo]).first.name
                @pl_rolou_ek = params[:pl_rolou_ek]
                @up_rolou_ek = params[:up_rolou_ek]
                @kinisi_deksia_aristera = params[:kinisi_deksia_aristera]
                @deroll = params[:deroll]
        end
        if ( params[:cat_rolo] == "epik" )
        	    rolo = RolaEpik.where(:id => params[:rolo_name]).first
                @cat_rolo = Epikathimeno.where(:id => rolo.epikathimeno_id).first.id
                @rolo_id = rolo.id
                @ti_rolo = "epik"
                @color_rolo = RolaColor.where(:name => params[:xrwma_rolo]).first.name
                @pl_rolou_ep = params[:pl_rolou_ep]
                @up_rolou_ep = params[:up_rolou_ep]
                @kinisi_deksia_aristera = params[:kinisi_deksia_aristera]
                @klap_ep = params[:klap_ep]
        end

		persida = Persides.where(:id => params[:persida]).first
        if ( !persida.nil? )
			@persida_id = persida.id
		    @color_persidas = RolaColor.where(:name => params[:xrwma_persidas]).first.name
		    @pl_persidas = params[:pl_persidas]
            @up_persidas = params[:up_persidas]
        end
        odoigos = RollGuide.where(:id => params[:odoigos]).first
        if ( !odoigos.nil? )
			@odoigos_id = odoigos.id
		    @color_odoigou = RolaColor.where(:name => params[:xrwma_odoigou]).first.name
            @up_odoigou = params[:up_odigou]
        end
        #	odoigos = RollGuide.where(:default => 1).first
        # 	@odoigos_id = odoigos.id
        #	@color_odoigou = 'white'
        	#@up_odoigou = height
        #end
        prostasia = TypoiProstasia.where(:id => params[:prostasia]).first
        if ( !prostasia.nil? )
			@prostasia_id = prostasia.id
		    #@color_odoigou = RolaColor.where(:name => params[:xrwma_odoigou]).first.name
        end
        typos = Profil.where(:id => params[:typos]).first
        if ( !typos.nil? )
			@typos_id = typos.id
		    @color_typos = RolaColor.where(:name => params[:typos_col]).first.name
		    @typos_arithmos = 1
        end
        #	if ( @open_categorie.id == 1 )
        #		typos = Profil.where(:default => 1).first
       # 		@typos_id = typos.id
		#    	@color_typos = 'white'
		 #   	@typos_arithmos = 1
		 #   else
		 #   	typos = Profil.where(:default => 2).first
		 #   	@typos_id = typos.id
		 #   	@color_typos = 'white'
		 #   	@typos_arithmos = 1
		 #   end
        #end
        ####
        @counter_profil = 0
        @counter_profil_ar = 0
        #Default colors
        @color_ar = RolaColor.where(:name => params[:col_ar]).first.name
        @color_de = RolaColor.where(:name => params[:col_de]).first.name
        @color_pa = RolaColor.where(:name => params[:col_pa]).first.name
        @color_ka = RolaColor.where(:name => params[:col_ka]).first.name
        ##
        pr_ar_1 = Profil.where(:id => params[:pr_ar_1]).first
        if ( !pr_ar_1.nil? )
			@pr_ar_1_id = pr_ar_1.id
			@epilogi_ar_1 = pr_ar_1.width
		    @color_ar = RolaColor.where(:name => params[:col_ar]).first.name
		    @pr_ar_1_ar = params[:pr_ar_1_ar]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_ar_2 = Profil.where(:id => params[:pr_ar_2]).first
        if ( !pr_ar_2.nil? )
			@pr_ar_2_id = pr_ar_2.id
			@epilogi_ar_2 = pr_ar_2.width
		    @color_ar = RolaColor.where(:name => params[:col_ar]).first.name
		    @pr_ar_2_ar = params[:pr_ar_2_ar]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_ar_3 = Profil.where(:id => params[:pr_ar_3]).first
        if ( !pr_ar_3.nil? )
			@pr_ar_3_id = pr_ar_3.id
			@epilogi_ar_3 = pr_ar_3.width
		    @color_ar = RolaColor.where(:name => params[:col_ar]).first.name
		    @pr_ar_3_ar = params[:pr_ar_3_ar]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_de_1 = Profil.where(:id => params[:pr_de_1]).first
        if ( !pr_de_1.nil? )
			@pr_de_1_id = pr_de_1.id
			@epilogi_de_1 = pr_de_1.width
		    @color_de = RolaColor.where(:name => params[:col_de]).first.name
		    @pr_de_1_de = params[:pr_de_1_de]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_de_2 = Profil.where(:id => params[:pr_de_2]).first
        if ( !pr_de_2.nil? )
			@pr_de_2_id = pr_de_2.id
			@epilogi_de_2 = pr_de_2.width
		    @color_de = RolaColor.where(:name => params[:col_de]).first.name
		    @pr_de_2_de = params[:pr_de_2_de]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_de_3 = Profil.where(:id => params[:pr_de_3]).first
        if ( !pr_de_3.nil? )
			@pr_de_3_id = pr_de_3.id
			@epilogi_de_3 = pr_de_3.width
		    @color_de = RolaColor.where(:name => params[:col_de]).first.name
		    @pr_de_3_de = params[:pr_de_3_de]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_pa_1 = Profil.where(:id => params[:pr_pa_1]).first
        if ( !pr_pa_1.nil? )
			@pr_pa_1_id = pr_pa_1.id
			@epilogi_pa_1 = pr_pa_1.width
		    @color_pa = RolaColor.where(:name => params[:col_pa]).first.name
		    @pr_pa_1_pa = params[:pr_pa_1_pa]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_pa_2 = Profil.where(:id => params[:pr_pa_2]).first
        if ( !pr_pa_2.nil? )
			@pr_pa_2_id = pr_pa_2.id
			@epilogi_pa_2 = pr_pa_2.width
		    @color_pa = RolaColor.where(:name => params[:col_pa]).first.name
		    @pr_pa_2_pa = params[:pr_pa_2_pa]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_pa_3 = Profil.where(:id => params[:pr_pa_3]).first
        if ( !pr_pa_3.nil? )
			@pr_pa_3_id = pr_pa_3.id
			@epilogi_pa_3 = pr_pa_3.width
		    @color_pa = RolaColor.where(:name => params[:col_pa]).first.name
		    @pr_pa_3_pa = params[:pr_pa_3_pa]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_ka_1 = Profil.where(:id => params[:pr_ka_1]).first
        if ( !pr_ka_1.nil? )
			@pr_ka_1_id = pr_ka_1.id
			@epilogi_ka_1 = pr_ka_1.width
		    @color_ka = RolaColor.where(:name => params[:col_ka]).first.name
		    @pr_ka_1_ka = params[:pr_ka_1_ka]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_ka_3 = Profil.where(:id => params[:pr_ka_3]).first
        if ( !pr_ka_3.nil? )
			@pr_ka_3_id = pr_ka_3.id
			@epilogi_ka_3 = pr_ka_3.width
		    @color_ka = RolaColor.where(:name => params[:col_ka]).first.name
		    @pr_ka_3_ka = params[:pr_ka_3_ka]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end
        pr_ka_2 = Profil.where(:id => params[:pr_ka_2]).first
        if ( !pr_ka_2.nil? )
			@pr_ka_2_id = pr_ka_2.id
			@epilogi_ka_2 = pr_ka_2.width
		    @color_ka = RolaColor.where(:name => params[:col_ka]).first.name
		    @pr_ka_2_ka = params[:pr_ka_2_ka]
		    @counter_profil = @counter_profil + 1
		    @counter_profil_ar = @counter_profil_ar + 1
        end

        @response = {:lastixa => @lastixa, :tzami0_id => @tzami0_id, :tzami0_cat => @tzami0_cat, :tzami_id => @tzami_id, :tzami_cat => @tzami_cat, :tzami2_cat => @tzami2_cat, :tzami2_id => @tzami2_id, :cat_rolo => @cat_rolo, :rolo_id => @rolo_id, :ti_rolo => @ti_rolo, :color_rolo => @color_rolo, :pl_rolou_ek => @pl_rolou_ek, :up_rolou_ek => @up_rolou_ek, :pl_rolou_ep => @pl_rolou_ep, :up_rolou_ep => @up_rolou_ep, :kinisi_deksia_aristera => @kinisi_deksia_aristera, :klap_ep => @klap_ep, :deroll => @deroll, :persida_id => @persida_id, :color_persidas => @color_persidas, :pl_persidas => @pl_persidas, :up_persidas => @up_persidas, :odoigos_id => @odoigos_id, :color_odoigou => @color_odoigou, :up_odoigou => @up_odoigou, :prostasia_id => @prostasia_id, :typos_id => @typos_id, :color_typos => @color_typos, :typos_arithmos => @typos_arithmos, :pr_ar_1_id => @pr_ar_1_id, :epilogi_ar_1 => @epilogi_ar_1, :pr_ar_1_ar => @pr_ar_1_ar, :pr_ar_2_id => @pr_ar_2_id, :epilogi_ar_2 => @epilogi_ar_2, :pr_ar_2_ar => @pr_ar_2_ar, :pr_ar_3_id => @pr_ar_3_id, :epilogi_ar_3 => @epilogi_ar_3, :color_ar => @color_ar, :pr_ar_3_ar => @pr_ar_3_ar, :pr_de_1_id => @pr_de_1_id, :epilogi_de_1 => @epilogi_de_1, :pr_de_1_de => @pr_de_1_de, :pr_de_2_id => @pr_de_2_id, :epilogi_de_2 => @epilogi_de_2, :color_de => @color_de, :pr_de_2_de => @pr_de_2_de, :pr_de_3_id => @pr_de_3_id, :epilogi_de_3 => @epilogi_de_3, :pr_de_3_de => @pr_de_3_de, :pr_pa_1_id => @pr_pa_1_id, :epilogi_pa_1 => @epilogi_pa_1, :color_pa => @color_pa, :pr_pa_1_pa => @pr_pa_1_pa, :pr_pa_2_id => @pr_pa_2_id, :epilogi_pa_2 => @epilogi_pa_2, :pr_pa_2_pa => @pr_pa_2_pa, :pr_pa_3_id => @pr_pa_3_id, :epilogi_pa_3 => @epilogi_pa_3, :pr_pa_3_pa => @pr_pa_3_pa, :pr_ka_1_id => @pr_ka_1_id, :epilogi_ka_1 => @epilogi_ka_1, :pr_ka_1_ka => @pr_ka_1_ka, :pr_ka_2_id => @pr_ka_2_id, :epilogi_ka_2 => @epilogi_ka_2, :color_ka => @color_ka, :pr_ka_2_ka => @pr_ka_2_ka, :pr_ka_3_id => @pr_ka_3_id, :epilogi_ka_3 => @epilogi_ka_3, :pr_ka_3_ka => @pr_ka_3_ka, }
        respond_to do |format|
          format.json { render json: @response.to_json}
        end
	end

	def epikathimena
		##Me ajax na pernw epikath an kanw click se epikath
		@epikathimena = RolaEpik.where(:epikathimeno_id => params[:epikathimeno_cat])
		@glwssa = session[:locale]
		@response = { :epikathimena => @epikathimena, :glwssa => @glwssa }
		respond_to do |format|
          format.json { render json: @response.to_json}
        end
	end

	def color_epikathimenou
		@colors = RolaColor.all
		respond_to do |format|
          format.json { render json: @colors.to_json}
        end
	end

	def eksoterika
		##Me ajax na pernw epikath an kanw click se epikath
		@eksoterika = RolaEkso.where(:rola_ekso_id => params[:eksoteriko_cat])
		respond_to do |format|
          format.json { render json: @eksoterika.to_json}
        end
	end

	def color_eksoterikou
		@colors = RolaColor.all
		respond_to do |format|
          format.json { render json: @colors.to_json}
        end
	end

	def color_persidas
		@color_persidas = RolaColor.all
		respond_to do |format|
          format.json { render json: @color_persidas.to_json}
        end
	end

	def color_odoigou
		@color_odoigou = RolaColor.all
		respond_to do |format|
          format.json { render json: @color_odoigou.to_json}
        end
	end

	def tzamia 
		#Find Category of Glass
		if ( params[:cat] == "0" )
			@tzami_cat = GlassCatInOut.where(:id => params[:id]).first
		end
		if ( params[:cat] == "1" )
			@tzami_cat = GlassCatIn.where(:id => params[:id]).first
		end
		if ( params[:cat] == "2" )
			@tzami_cat = GlassCatOut.where(:id => params[:id]).first
		end
		tzamia = []
		tzamia << @tzami_cat.lista.to_s.split(",")

		@tzamia = Tzamia.where(:id => tzamia)
		respond_to do |format|
          format.json { render json: @tzamia.to_json}
        end
	end

	def color_typos
		@color_typos = RolaColor.all
		respond_to do |format|
          format.json { render json: @color_typos.to_json}
        end
	end

	def profil
		@profil = Profil.where.not(:width => 0)
		respond_to do |format|
          format.json { render json: @profil.to_json}
        end
	end

	def color_profil
		@color_profil = RolaColor.all
		respond_to do |format|
          format.json { render json: @color_profil.to_json}
        end
	end

    ## Μονο για επικαθήμενα. Βλέπω αν οι διαστάσεις είναι σωστές και αφήνω ή όχι τα χρώματα των επικαθήμενων να εμφανιστούν.
    ## Δεν ξέρω αν χρειάζονται όλα αυτα για το view, ίσως δεν περνάω αρκετα στοιχεια απο ajax.
    ## Πάντα η μέθοδος δέχετε τις νέες διαστάσεις και οχι τις αρχικές.
	def upologismos
		
        @epikathimena_cat = Epikathimeno.all
         
		@open_categorie = OpenCategorie.where(:name => params[:open_categorie_name]).first
		@material = Material.where(:name => params[:material_name]).first
		@constructor = Constructor.where(:name => params[:constructor_name]).first
		@system = System.where(:name => params[:system_name]).first
		@line = Line.where(:name => params[:line_name]).first
		@leaf = Leaf.where(:name => params[:leaf_name]).first
		@open_type = OpenType.where(:name => params[:open_type_name]).first
		@color = Color.where(:name => params[:color_name]).first
		##if params exists ΚΑΝΟΝΙΚΑ
		@color_deksia = Color.where(:name => params[:color_deksia]).first
		@color_aristera = Color.where(:name => params[:color_aristera]).first
		@color_panw = Color.where(:name => params[:color_panw]).first
		@color_katw = Color.where(:name => params[:color_katw]).first
		@color_fulou = Color.where(:name => params[:color_fulou]).first
		@posotita = params[:posotita].to_i
		##
		@width = params[:width]
		@height = params[:height_new]
		width = params[:width].to_f
		height = params[:height_new].to_f
		############
		@epikathimeno = RolaEpik.where(:id => params[:epikathimeno_rolo]).first
		@anoigma = OpenType.where(:name => params[:anoigma]).first
		@height = params[:height_new]##POU EDWSA
        
		@min = @anoigma.min_height
		@mion = ( height - @epikathimeno.height )
        ## Αν το min height του κουφωματος είναι μικρότερο απο το νέο height(height που έδωσα - ρολό), τοτε όλα σωστα.
        ## Αλλιώς δεν παράγετε τόσο μικρό κούφωμα και δεν μπορούμε να βάλουμε επικαθημενο ρολο.
		if ( @min <= @mion )##swsto ΥΠΟΛΟΓΙΣΜΟΣ ΝΕΑΣ ΤΙΜΗΣ + ΠΡΟΒΟΛΗ
			@apantisi = true
			respond_to do |format|
	          format.json { render json: @apantisi}
	        end
		end
		if ( @min > @mion )##akuro
			@apantisi = false
			respond_to do |format|
	          format.json { render json: @apantisi}
	        end
		end
	end

    ## Στις δυο παρακάτω μεθόδους βλέπω αν χωράει το προφιλ δεξια και αριστερά.
    ## Πάντα η μέθοδος δέχετε τις νέες διαστάσεις και οχι τις αρχικές. 
	def upologismos_platos_profil
		@profil = Profil.where(:id => params[:profil]).first
		@anoigma = OpenType.where(:name => params[:anoigma]).first
		@width = params[:width_new]##POU EDWSA
		width = params[:width_new].to_f
		input = params[:input].to_i

		@min = @anoigma.min_width
		@mion = ( width - (@profil.width * input) )

		if ( @min <= @mion )##swsto ΥΠΟΛΟΓΙΣΜΟΣ ΝΕΑΣ ΤΙΜΗΣ + ΠΡΟΒΟΛΗ
			@apantisi = true
			respond_to do |format|
	          format.json { render json: @apantisi}
	        end
		end
		if ( @min > @mion )##akuro  Ετσι παμε στο προιγουμενο width, αυτο που εδωσα στον ajax
			@apantisi = false
			respond_to do |format|
	          format.json { render json: @apantisi}
	        end
		end
	end

	def upologismos_upsos_profil
		@profil = Profil.where(:id => params[:profil]).first
		@anoigma = OpenType.where(:name => params[:anoigma]).first
		@height = params[:height_new]##POU EDWSA
		height = params[:height_new].to_f
		input = params[:input].to_i

		@min = @anoigma.min_height
		@mion = ( height - (@profil.height * input) )

		if ( @min <= @mion )##swsto ΥΠΟΛΟΓΙΣΜΟΣ ΝΕΑΣ ΤΙΜΗΣ + ΠΡΟΒΟΛΗ
			@apantisi = true
			respond_to do |format|
	          format.json { render json: @apantisi}
	        end
		end
		if ( @min > @mion )##akuro
			@apantisi = false
			respond_to do |format|
	          format.json { render json: @apantisi}
	        end
		end
	end

    ############# Να πρωσθέσω μια ενδιαμεση συναρτηση που να κανει την δουλεια του price  ######
    ############# Δεν χρησιμοποιω το view price που ειναι η γενικη παραγγελια ######
    ## Γενικά η price είναι η μέθοδος που υπολογίζει όλες τις τιμές ανάλογα σε πιο σημίο είμαστε.
    ## Κάνει και τελικό υπολογισμό και σταδικά προσθέτει τιμές ανάλογα με το τι προσθέτουμε.
	def price
		@open_categorie = OpenCategorie.where(:name => params[:open_categorie_name]).first
		@material = Material.where(:name => params[:material_name]).first
		@constructor = Constructor.where(:name => params[:constructor_name]).first
		@system = System.where(:name => params[:system_name]).first
		@line = Line.where(:name_allo => params[:line_name]).first
		@leaf = Leaf.where(:name => params[:leaf_name]).first
		@open_type = OpenType.where(:name => params[:open_type_name]).first
		#parts = @open_type.code.to_s.split(".")
		#result = parts.count > 1 ? parts[1].to_s : 0
		require 'bigdecimal'
		div_mod = BigDecimal(@open_type.code.to_s).divmod 1
		result = div_mod[1].to_s
		open_type_code = @open_type.code
		@color = Color.where(:name => params[:color_name]).first
		@color_eksw = Color.where(:name => params[:color_eksw_name]).first
		@mesa_eksw = params[:color_eksw]
		##if params exists ΚΑΝΟΝΙΚΑ
		@color_deksia = Color.where(:name => params[:color_deksia]).first
		@color_aristera = Color.where(:name => params[:color_aristera]).first
		@color_panw = Color.where(:name => params[:color_panw]).first
		@color_katw = Color.where(:name => params[:color_katw]).first
		@color_fulou = Color.where(:name => params[:color_fulou]).first
		@posotita = params[:posotita].to_i
		## Ρολα
		@odoigos = RollGuide.where(:id => params[:odoigos_rolou]).first
		@xrwma_odoigou = params[:color_odoigou]
		@tzamia0 = Tzamia.where(:id => params[:tzamia0]).first
		@tzamia = Tzamia.where(:id => params[:tzamia]).first
		@tzamia2 = Tzamia.where(:id => params[:tzamia2]).first
		@epik_rolo = RolaEpik.where(:id => params[:epik_rolo]).first
		@xrwma_epikathimenou = params[:xrwma_epikathimenou]
		@ekso_rolo = RolaEkso.where(:id => params[:ekso_rolo]).first
		@xrwma_eksoterikou = params[:xrwma_eksoterikou]
		@persida = Persides.where(:id => params[:persida]).first
		@xrwma_persidas = params[:color_persidas]
		@lastixa = params[:lastixo]
		@epiva_la = 0
		@aukson_id = params[:aukson_id]
		@pl_rol_ep = params[:pl_rol_ep]
		@up_rol_ep = params[:up_rol_ep]
		@kinisi_ep = params[:kinisi_ep]
		@pl_rol_ek = params[:pl_rol_ek]
		@up_rol_ek = params[:up_rol_ek]
		@kinisi_ek = params[:kinisi_ek]
		@klap_ep = params[:klap_ep]
		@deroll = params[:deroll]
		@pl_persidas = params[:pl_persidas]
		@up_persidas = params[:up_persidas]
		@up_odoigou = params[:up_odoigou]
		#### NEA PROFIL
		@profil_deksia_1 = Profil.where(:id => params[:profil_deksia_1]).first
		@numero_deksia_1 = params[:profil_deksia_1_arithmos].to_i
		#@timi_profil_deksia_1 = ( @profil_deksia_1.price * @numero_deksia_1 )
		@profil_deksia_2 = Profil.where(:id => params[:profil_deksia_2]).first
		@numero_deksia_2 = params[:profil_deksia_2_arithmos].to_i
		#@timi_profil_deksia_2 = ( @profil_deksia_2.price * @numero_deksia_2 )
		@profil_deksia_3 = Profil.where(:id => params[:profil_deksia_3]).first
		@numero_deksia_3 = params[:profil_deksia_3_arithmos].to_i
		#@timi_profil_deksia_3 = ( @profil_deksia_3.price * @numero_deksia_3 )
		@profil_aristera_1 = Profil.where(:id => params[:profil_aristera_1]).first
		@numero_aristera_1 = params[:profil_aristera_1_arithmos].to_i
		#@timi_profil_deksia_1 = ( @profil_deksia_1.price * @numero_deksia_1 )
		@profil_aristera_2 = Profil.where(:id => params[:profil_aristera_2]).first
		@numero_aristera_2 = params[:profil_aristera_2_arithmos].to_i
		#@timi_profil_deksia_2 = ( @profil_deksia_2.price * @numero_deksia_2 )
		@profil_aristera_3 = Profil.where(:id => params[:profil_aristera_3]).first
		@numero_aristera_3 = params[:profil_aristera_3_arithmos].to_i
		#@timi_profil_deksia_3 = ( @profil_deksia_3.price * @numero_deksia_3 )
		@profil_panw_1 = Profil.where(:id => params[:profil_panw_1]).first
		@numero_panw_1 = params[:profil_panw_1_arithmos].to_i
		#@timi_profil_deksia_1 = ( @profil_deksia_1.price * @numero_deksia_1 )
		@profil_panw_2 = Profil.where(:id => params[:profil_panw_2]).first
		@numero_panw_2 = params[:profil_panw_2_arithmos].to_i
		#@timi_profil_deksia_2 = ( @profil_deksia_2.price * @numero_deksia_2 )
		@profil_panw_3 = Profil.where(:id => params[:profil_panw_3]).first
		@numero_panw_3 = params[:profil_panw_3_arithmos].to_i
		########
		@profil_katw_1 = Profil.where(:id => params[:profil_katw_1]).first
		@numero_katw_1 = params[:profil_katw_1_arithmos].to_i
		#@timi_profil_deksia_1 = ( @profil_deksia_1.price * @numero_deksia_1 )
		@profil_katw_2 = Profil.where(:id => params[:profil_katw_2]).first
		@numero_katw_2 = params[:profil_katw_2_arithmos].to_i
		#@timi_profil_deksia_2 = ( @profil_deksia_2.price * @numero_deksia_2 )
		@profil_katw_3 = Profil.where(:id => params[:profil_katw_3]).first
		@numero_katw_3 = params[:profil_katw_3_arithmos].to_i
		########
		@typos_katw_1 = Profil.where(:id => params[:typos_katw_1]).first
		@numero_typos_1 = params[:typos_katw_1_arithmos].to_i
		#@timi_profil_deksia_1 = ( @profil_deksia_1.price * @numero_deksia_1 )
		@typos_katw_2 = Profil.where(:id => params[:typos_katw_2]).first
		@numero_typos_2 = params[:typos_katw_2_arithmos].to_i
		#@timi_profil_deksia_2 = ( @profil_deksia_2.price * @numero_deksia_2 )
		@typos_katw_3 = Profil.where(:id => params[:typos_katw_3]).first
		@numero_typos_3 = params[:typos_katw_3_arithmos].to_i
		prostasia = params[:prostasia]
		### Μεχρι εδω
		@numero_deksia = params[:posotita_deksia_profil].to_i
		@numero_aristera = params[:posotita_aristera_profil].to_i
		@numero_panw = params[:posotita_panw_profil].to_i
		@numero_katw = params[:posotita_katw_profil].to_i
		@color_profil_deksia = RolaColor.where(:name => params[:color_profil_deksia]).first 
		@color_profil_aristera = RolaColor.where(:name => params[:color_profil_aristera]).first
		@color_profil_panw = RolaColor.where(:name => params[:color_profil_panw]).first
		@color_profil_katw = RolaColor.where(:name => params[:color_profil_katw]).first
		#@typos = Profil.where(:id => params[:typos]).first
		#@color_typos = RolaColor.where(:name => params[:color_typos]).first
		##
		@width = params[:width]
		@height = params[:height]
		width = params[:width].to_f
		height = params[:height].to_f
		xwrisma1 = params[:xwrisma1]
		xwrisma2 = params[:xwrisma2]
		xwrisma3_1 = params[:xwrisma3_1]
		xwrisma3_2 = params[:xwrisma3_2]
		xwrisma3_3 = params[:xwrisma3_3]
		xwrisma_y_1 = params[:xwrisma_y_1]
		xwrisma_y_2 = params[:xwrisma_y_2]
		width_neo = params[:new_width].to_f
		height_neo = params[:new_height].to_f
		width_gia_vasi_new = params[:new_width].to_f
		height_gia_vasi_new = params[:new_height].to_f
        ### Μεχρι εδώ είναι για view που δεν χρησιμοποιώ.

        if params.has_key?(:elegxos_w)
			if ( params[:elegxos_w] == "1" )
				width = @open_type.max_width
				width_neo = width
			end
		end
		if params.has_key?(:elegxos_h)
			if ( params[:elegxos_w] == "1" )
				height = @open_type.max_height
				height_neo = height
			end
		end

        ## HASH με διακυμάνσεις τιμών σύμφωνα με την βάση μου.
        ## Ανάλογα με το μίκος και ύψος, που πάτησα ψαχνω μεσα σε αυτα τα hash και πέρνω μια τιμή, το κλειδί. 
        widths = { 600 => (350..700), 700 => (700..799), 800 => (800..899), 900 => (900..999), 1000 => (1000..1099), 1100 => (1100..1199), 1200 => (1200..1299), 1300 => (1300..1399), 1400 => (1400..1499), 1500 => (1500..1599), 1600 => (1600..1699), 1700 => (1700..1799), 1800 => (1800..1899), 1900 => (1900..1999), 2000 => (2000..2099), 2100 => (2100..2199), 2200 => (2200..2299), 2300 => (2300..2399), 2400 => (2400..2499), 2500 => (2500..2599), 2600 => (2600..2699), 2700 => (2700..2799), 2800 => (2800..2899), 2900 => (2900..2999), 3000 => (3000..3099), 3100 => (3100..3199), 3200 => (3200..3299), 3300 => (3300..3399), 3400 => (3400..3499), 3500 => (3500..3599), 3700 => (3700..3799), 3800 => (3800..3899), 3900 => (3900..3999), 4000 => (4000..4099), 4100 => (4100..4199), 4200 => (4200..4299), 4300 => (4300..4399), 4400 => (4400..4499), 4500 => (4500..4599), 4600 => (4600..4699), 4700 => (4700..4799), 4800 => (4800..4899), 4900 => (4900..4999), 5000 => (5000..5099), 5100 => (5100..5199), 5200 => (5200..5299), 5300 => (5300..5399), 5400 => (5400..5499), 5500 => (5500..5599), 5600 => (5600..5699), 5700 => (5700..5799), 5800 => (5800..5899), 5900 => (5900..5999), 6000 => (6000..6099)}
        heights = { 600 => (350..700), 700 => (700..799), 800 => (800..899), 900 => (900..999), 1000 => (1000..1099), 1100 => (1100..1199), 1200 => (1200..1299), 1300 => (1300..1399), 1400 => (1400..1499), 1500 => (1500..1599), 1600 => (1600..1699), 1700 => (1700..1799), 1800 => (1800..1899), 1900 => (1900..1999), 2000 => (2000..2099), 2100 => (2100..2199), 2200 => (2200..2299), 2300 => (2300..2399), 2400 => (2400..2499), 2500 => (2500..2599), 2600 => (2600..2699), 2700 => (2700..2799), 2800 => (2800..2899), 2900 => (2900..2999), 3000 => (3000..3099), 3100 => (3100..3199), 3200 => (3200..3299), 3300 => (3300..3399), 3400 => (3400..3499), 3500 => (3500..3599), 3700 => (3700..3799), 3800 => (3800..3899), 3900 => (3900..3999), 4000 => (4000..4099)}
        
        #if ( @open_type.code == 100 )
		#    width = (width / 2)	
		#end
		#if ( @open_type.code == 101 )
		#    width = (width / 2)	
		#end
=begin
        width_index = widths.select do |k,v|
		  v.include?(width)
		end.keys.first

		height_index = heights.select do |c,d|
		  d.include?(height)
		end.keys.first


		@col_data_heights = []
		CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';', headers:true) {|row| @col_data_heights << row[0]}
		#puts col_data_heights

		@col_data_widths = []
		CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';').with_index do |row, i| 
			if ( i == 0 )
				a = 0
				while a < 20 do
   					@col_data_widths << row[a]
   					a +=1
				end
			end
		end

		@thesi_width = 1
		@thesi_height = 1
		@timi = 0

		@col_data_widths.each_with_index do |width, i|
			if ( width.to_i == width_index )
				@thesi_width = i
			end
		end

		@col_data_heights.each_with_index do |height, i|
			if ( height.to_i == height_index )
				@thesi_height = i
			end
		end

		puts @thesi_width
		puts @thesi_height

		CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';',headers:true ).with_index do |row, i| 
			if ( i == @thesi_height )
				@timi = row[@thesi_width]
			end
		end

		puts @timi
		@price_temp = @timi
		@price = @timi.to_f
=end
		@price = 0
		@price_temp = 0

		arr = @open_type.table.split('|').collect! {|n| n.to_s}

		arr.map! { |element|
		    element.split(',').collect! {|n| n.to_s}
		}

		arr.each_with_index do |subarr, i|
		  puts "Ποσα col εχω: "+subarr.length.to_s
		  subarr.each_with_index do |anoigma, j|
		    puts "Γραμμη: "+i.to_s+" Στήλη: "+j.to_s+" Ανοιγμα: "+anoigma
		    #Για καθε row βρησκω το υψος
		    if( xwrisma_y_1 != "0" ) #duo upsos
		    	puts "Υψος: "+eval("xwrisma_y_#{i+1}")
		    	height_gia_anoigma = eval("xwrisma_y_#{i+1}")
		    else #ena upsos
		    	puts "Υψος: "+height.to_s 
		    	height_gia_anoigma = height
		    end
		    #Για καθε col το μήκος subarr.length ποσα col σε καθε row
		    if ( subarr.length == 1 )
		    	puts "Μήκος: "+width.to_s
		    	width_gia_anoigma = width
		    elsif ( subarr.length == 2 )
		    	puts "Μήκος: "+eval("xwrisma#{j+1}")
		    	width_gia_anoigma = eval("xwrisma#{j+1}")
		    elsif ( subarr.length == 3 )
		    	puts "Μήκος: "+eval("xwrisma3_#{j+1}")
		    	width_gia_anoigma = eval("xwrisma3_#{j+1}")
		    end

		    puts "Width meta apo "+width_gia_anoigma.class.to_s
			puts "Height meta apo "+height_gia_anoigma.class.to_s
		    
		    width_index = widths.select do |k,v|
			  v.include?(width_gia_anoigma.to_f)
			end.keys.first

			height_index = heights.select do |c,d|
			  d.include?(height_gia_anoigma.to_f)
			end.keys.first

			puts "Width meta apo epeksergasia"+width_index.to_s
			puts "Height meta apo epeksergasia"+height_index.to_s


		    ##Για καθε ανοιγμα τιμη
		    @col_data_heights = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';', headers:true) {|row| @col_data_heights << row[0]}
			#puts col_data_heights

			@col_data_widths = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';').with_index do |row, i| 
				if ( i == 0 )
					a = 0
					while a < 20 do
	   					@col_data_widths << row[a]
	   					a +=1
					end
				end
			end

			@thesi_width = 1
			@thesi_height = 1
			@timi = 0

			@col_data_widths.each_with_index do |width, i|
				if ( width.to_i == width_index )
					@thesi_width = i
				end
			end

			@col_data_heights.each_with_index do |height, i|
				if ( height.to_i == height_index )
					@thesi_height = i
				end
			end

			puts @thesi_width
			puts @thesi_height

			CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';',headers:true ).with_index do |row, i| 
				if ( i == @thesi_height )
					@timi = row[@thesi_width]
				end
			end

			puts "Τιμή για άνοιγμα: "+anoigma.to_s+" == "+@timi

			@price = @price + @timi.to_f
	
		  end#end mesa
		end#end eksw

		##Gia code == 10, 22, 100, 101
		if ( (@open_type.id == 12) || (@open_type.id == 13) || (@open_type.id == 22) || (@open_type.id == 23) || (@open_type.id == 68) || (@open_type.id == 69) )

			puts "Width gia timokatalogo"+width.to_s
			puts "Height meta apo "+height.to_s
		    
		    width_index = widths.select do |k,v|
			  v.include?(width.to_f)
			end.keys.first

			height_index = heights.select do |c,d|
			  d.include?(height.to_f)
			end.keys.first

			puts "Width meta apo epeksergasia"+width_index.to_s
			puts "Height meta apo epeksergasia"+height_index.to_s


		    ##Για καθε ανοιγμα τιμη
		    @col_data_heights = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';', headers:true) {|row| @col_data_heights << row[0]}
			#puts col_data_heights

			@col_data_widths = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';').with_index do |row, i| 
				if ( i == 0 )
					a = 0
					while a < 20 do
	   					@col_data_widths << row[a]
	   					a +=1
					end
				end
			end

			@thesi_width = 1
			@thesi_height = 1
			@timi = 0

			@col_data_widths.each_with_index do |width, i|
				if ( width.to_i == width_index )
					@thesi_width = i
				end
			end

			@col_data_heights.each_with_index do |height, i|
				if ( height.to_i == height_index )
					@thesi_height = i
				end
			end

			puts @thesi_width
			puts @thesi_height

			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';',headers:true ).with_index do |row, i| 
				if ( i == @thesi_height )
					@timi = row[@thesi_width]
				end
			end

			puts "Τιμή για άνοιγμα απο τιμοκατάλογο: "+@open_type.csv.to_s+" == "+@timi

			@price = @timi.to_f
		end
		##Gia code == 16,17
		if ( (@open_type.id == 38) || (@open_type.id == 39) || (@open_type.id == 40) || (@open_type.id == 41) || (@open_type.id == 42) || (@open_type.id == 43)  )

			height_gia_anoigma_mono_gia_edw = 0
			@pricepanw = 0

			arr = @open_type.table.split('|').collect! {|n| n.to_s}

			arr.map! { |element|
			    element.split(',').collect! {|n| n.to_s}
			}

			arr.each_with_index do |subarr, i|
			  puts "Ποσα col εχω: "+subarr.length.to_s
			  #Μονο για το επάνω
			  if ( i.to_s == "0" )

				  subarr.each_with_index do |anoigma, j|
				    puts "Γραμμη: "+i.to_s+" Στήλη: "+j.to_s+" Ανοιγμα: "+anoigma
				    #Για καθε row βρησκω το υψος
				    if( xwrisma_y_1 != "0" ) #duo upsos
				    	puts "Υψος: "+eval("xwrisma_y_#{i+1}")
				    	height_gia_anoigma = eval("xwrisma_y_#{i+1}")
				    else #ena upsos
				    	puts "Υψος: "+height.to_s 
				    	height_gia_anoigma = height
				    end
				    #Για καθε col το μήκος subarr.length ποσα col σε καθε row
				    if ( subarr.length == 1 )
				    	puts "Μήκος: "+width.to_s
				    	width_gia_anoigma = width
				    elsif ( subarr.length == 2 )
				    	puts "Μήκος: "+eval("xwrisma#{j+1}")
				    	width_gia_anoigma = eval("xwrisma#{j+1}")
				    elsif ( subarr.length == 3 )
				    	puts "Μήκος: "+eval("xwrisma3_#{j+1}")
				    	width_gia_anoigma = eval("xwrisma3_#{j+1}")
				    end

				    puts "Width meta apo "+width_gia_anoigma.class.to_s
					puts "Height meta apo "+height_gia_anoigma.class.to_s
				    
				    width_index = widths.select do |k,v|
					  v.include?(width_gia_anoigma.to_f)
					end.keys.first

					height_index = heights.select do |c,d|
					  d.include?(height_gia_anoigma.to_f)
					end.keys.first

					height_gia_anoigma_mono_gia_edw = height_gia_anoigma.to_f

					puts "Width meta apo epeksergasia"+width_index.to_s
					puts "Height meta apo epeksergasia"+height_index.to_s


				    ##Για καθε ανοιγμα τιμη
				    @col_data_heights = []
					CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';', headers:true) {|row| @col_data_heights << row[0]}
					#puts col_data_heights

					@col_data_widths = []
					CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';').with_index do |row, i| 
						if ( i == 0 )
							a = 0
							while a < 20 do
			   					@col_data_widths << row[a]
			   					a +=1
							end
						end
					end

					@thesi_width = 1
					@thesi_height = 1
					@timi = 0

					@col_data_widths.each_with_index do |width, i|
						if ( width.to_i == width_index )
							@thesi_width = i
						end
					end

					@col_data_heights.each_with_index do |height, i|
						if ( height.to_i == height_index )
							@thesi_height = i
						end
					end

					puts @thesi_width
					puts @thesi_height

					CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';',headers:true ).with_index do |row, i| 
						if ( i == @thesi_height )
							@timi = row[@thesi_width]
						end
					end

					puts "Τιμή για άνοιγμα για πάνω: "+anoigma.to_s+" == "+@timi

					@pricepanw = @pricepanw + @timi.to_f
			
				  end#end mesa
				end#End if epanw
			end#end eksw

			puts "Width gia timokatalogo"+width.to_s
			puts "Height meta apo "+(height - height_gia_anoigma_mono_gia_edw.to_f).to_s
		    
		    width_index = widths.select do |k,v|
			  v.include?(width.to_f)
			end.keys.first

			height_index = heights.select do |c,d|
			  d.include?((height - height_gia_anoigma_mono_gia_edw.to_f).to_f)
			end.keys.first

			puts "Width meta apo epeksergasia"+width_index.to_s
			puts "Height meta apo epeksergasia"+height_index.to_s


		    ##Για καθε ανοιγμα τιμη
		    @col_data_heights = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';', headers:true) {|row| @col_data_heights << row[0]}
			#puts col_data_heights

			@col_data_widths = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';').with_index do |row, i| 
				if ( i == 0 )
					a = 0
					while a < 20 do
	   					@col_data_widths << row[a]
	   					a +=1
					end
				end
			end

			@thesi_width = 1
			@thesi_height = 1
			@timi = 0

			@col_data_widths.each_with_index do |width, i|
				if ( width.to_i == width_index )
					@thesi_width = i
				end
			end

			@col_data_heights.each_with_index do |height, i|
				if ( height.to_i == height_index )
					@thesi_height = i
				end
			end

			puts @thesi_width
			puts @thesi_height

			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';',headers:true ).with_index do |row, i| 
				if ( i == @thesi_height )
					@timi = row[@thesi_width]
				end
			end

			puts "Τιμή για άνοιγμα απο τιμοκατάλογο: "+@open_type.csv.to_s+" == "+@timi

			@price = @pricepanw + @timi.to_f

			puts "Τιμή γενικη συνδιασμος πάνω κάτω: "+@price.to_s
		end

		##Gia code == 13_60, 25_63, 25_65
		if ( (@open_type.id == 60) || (@open_type.id == 63) || (@open_type.id == 65) || (@open_type.id == 67)  )

			width_gia_anoigma_mono_gia_edw = 0
			@pricepanw = 0

			arr = @open_type.table.split('|').collect! {|n| n.to_s}

			arr.map! { |element|
			    element.split(',').collect! {|n| n.to_s}
			}

			arr.each_with_index do |subarr, i|
			  puts "Ποσα col εχω: "+subarr.length.to_s
				  subarr.each_with_index do |anoigma, j|
				  	#Mono gia tin prwti stili
				  	if ( j.to_s == "0" )
				    puts "Γραμμη: "+i.to_s+" Στήλη: "+j.to_s+" Ανοιγμα: "+anoigma
				    #Για καθε row βρησκω το υψος
				    if( xwrisma_y_1 != "0" ) #duo upsos
				    	puts "Υψος: "+eval("xwrisma_y_#{i+1}")
				    	height_gia_anoigma = eval("xwrisma_y_#{i+1}")
				    else #ena upsos
				    	puts "Υψος: "+height.to_s 
				    	height_gia_anoigma = height
				    end
				    #Για καθε col το μήκος subarr.length ποσα col σε καθε row
				    if ( subarr.length == 1 )
				    	puts "Μήκος: "+width.to_s
				    	width_gia_anoigma = width
				    elsif ( subarr.length == 2 )
				    	puts "Μήκος: "+eval("xwrisma#{j+1}")
				    	width_gia_anoigma = eval("xwrisma#{j+1}")
				    elsif ( subarr.length == 3 )
				    	puts "Μήκος: "+eval("xwrisma3_#{j+1}")
				    	width_gia_anoigma = eval("xwrisma3_#{j+1}")
				    end

				    puts "Width meta apo "+width_gia_anoigma.class.to_s
					puts "Height meta apo "+height_gia_anoigma.class.to_s
				    
				    width_index = widths.select do |k,v|
					  v.include?(width_gia_anoigma.to_f)
					end.keys.first

					height_index = heights.select do |c,d|
					  d.include?(height_gia_anoigma.to_f)
					end.keys.first

					width_gia_anoigma_mono_gia_edw = width_gia_anoigma.to_f

					puts "Width meta apo epeksergasia"+width_index.to_s
					puts "Height meta apo epeksergasia"+height_index.to_s


				    ##Για καθε ανοιγμα τιμη
				    @col_data_heights = []
					CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';', headers:true) {|row| @col_data_heights << row[0]}
					#puts col_data_heights

					@col_data_widths = []
					CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';').with_index do |row, i| 
						if ( i == 0 )
							a = 0
							while a < 20 do
			   					@col_data_widths << row[a]
			   					a +=1
							end
						end
					end

					@thesi_width = 1
					@thesi_height = 1
					@timi = 0

					@col_data_widths.each_with_index do |width, i|
						if ( width.to_i == width_index )
							@thesi_width = i
						end
					end

					@col_data_heights.each_with_index do |height, i|
						if ( height.to_i == height_index )
							@thesi_height = i
						end
					end

					puts @thesi_width
					puts @thesi_height

					CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';',headers:true ).with_index do |row, i| 
						if ( i == @thesi_height )
							@timi = row[@thesi_width]
						end
					end

					puts "Τιμή για άνοιγμα για πάνω: "+anoigma.to_s+" == "+@timi

					@pricepanw = @pricepanw + @timi.to_f
				  end#Mono gia prwti stili
				  end#end mesa
			end#end eksw

			puts "Width gia timokatalogo"+( width - width_gia_anoigma_mono_gia_edw.to_f).to_s
			puts "Height meta apo "+height.to_s
		    
		    width_index = widths.select do |k,v|
			  v.include?((width - width_gia_anoigma_mono_gia_edw.to_f).to_f)
			end.keys.first

			height_index = heights.select do |c,d|
			  d.include?(height.to_f)
			end.keys.first

			puts "Width meta apo epeksergasia"+width_index.to_s
			puts "Height meta apo epeksergasia"+height_index.to_s


		    ##Για καθε ανοιγμα τιμη
		    @col_data_heights = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';', headers:true) {|row| @col_data_heights << row[0]}
			#puts col_data_heights

			@col_data_widths = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';').with_index do |row, i| 
				if ( i == 0 )
					a = 0
					while a < 20 do
	   					@col_data_widths << row[a]
	   					a +=1
					end
				end
			end

			@thesi_width = 1
			@thesi_height = 1
			@timi = 0

			@col_data_widths.each_with_index do |width, i|
				if ( width.to_i == width_index )
					@thesi_width = i
				end
			end

			@col_data_heights.each_with_index do |height, i|
				if ( height.to_i == height_index )
					@thesi_height = i
				end
			end

			puts @thesi_width
			puts @thesi_height

			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';',headers:true ).with_index do |row, i| 
				if ( i == @thesi_height )
					@timi = row[@thesi_width]
				end
			end

			puts "Τιμή για άνοιγμα απο τιμοκατάλογο: "+@open_type.csv.to_s+" == "+@timi

			@price = @pricepanw + @timi.to_f

			puts "Τιμή γενικη συνδιασμος 3fylla: "+@price.to_s
		end

		##Gia code == ta upolipa
		if ( (@open_type.id == 61) || (@open_type.id == 63) || (@open_type.id == 64) || (@open_type.id == 66)  )

			width_gia_anoigma_mono_gia_edw = 0
			@pricepanw = 0

			arr = @open_type.table.split('|').collect! {|n| n.to_s}

			arr.map! { |element|
			    element.split(',').collect! {|n| n.to_s}
			}

			arr.each_with_index do |subarr, i|
			  puts "Ποσα col εχω: "+subarr.length.to_s
				  subarr.each_with_index do |anoigma, j|
				  	#Mono gia tin prwti stili
				  	if ( j.to_s == "2" )
				    puts "Γραμμη: "+i.to_s+" Στήλη: "+j.to_s+" Ανοιγμα: "+anoigma
				    #Για καθε row βρησκω το υψος
				    if( xwrisma_y_1 != "0" ) #duo upsos
				    	puts "Υψος: "+eval("xwrisma_y_#{i+1}")
				    	height_gia_anoigma = eval("xwrisma_y_#{i+1}")
				    else #ena upsos
				    	puts "Υψος: "+height.to_s 
				    	height_gia_anoigma = height
				    end
				    #Για καθε col το μήκος subarr.length ποσα col σε καθε row
				    if ( subarr.length == 1 )
				    	puts "Μήκος: "+width.to_s
				    	width_gia_anoigma = width
				    elsif ( subarr.length == 2 )
				    	puts "Μήκος: "+eval("xwrisma#{j+1}")
				    	width_gia_anoigma = eval("xwrisma#{j+1}")
				    elsif ( subarr.length == 3 )
				    	puts "Μήκος: "+eval("xwrisma3_#{j+1}")
				    	width_gia_anoigma = eval("xwrisma3_#{j+1}")
				    end

				    puts "Width meta apo "+width_gia_anoigma.class.to_s
					puts "Height meta apo "+height_gia_anoigma.class.to_s
				    
				    width_index = widths.select do |k,v|
					  v.include?(width_gia_anoigma.to_f)
					end.keys.first

					height_index = heights.select do |c,d|
					  d.include?(height_gia_anoigma.to_f)
					end.keys.first

					width_gia_anoigma_mono_gia_edw = width_gia_anoigma.to_f

					puts "Width meta apo epeksergasia"+width_index.to_s
					puts "Height meta apo epeksergasia"+height_index.to_s


				    ##Για καθε ανοιγμα τιμη
				    @col_data_heights = []
					CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';', headers:true) {|row| @col_data_heights << row[0]}
					#puts col_data_heights

					@col_data_widths = []
					CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';').with_index do |row, i| 
						if ( i == 0 )
							a = 0
							while a < 20 do
			   					@col_data_widths << row[a]
			   					a +=1
							end
						end
					end

					@thesi_width = 1
					@thesi_height = 1
					@timi = 0

					@col_data_widths.each_with_index do |width, i|
						if ( width.to_i == width_index )
							@thesi_width = i
						end
					end

					@col_data_heights.each_with_index do |height, i|
						if ( height.to_i == height_index )
							@thesi_height = i
						end
					end

					puts @thesi_width
					puts @thesi_height

					CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';',headers:true ).with_index do |row, i| 
						if ( i == @thesi_height )
							@timi = row[@thesi_width]
						end
					end

					puts "Τιμή για άνοιγμα για πάνω: "+anoigma.to_s+" == "+@timi

					@pricepanw = @pricepanw + @timi.to_f
				  end#Mono gia prwti stili
				  end#end mesa
			end#end eksw

			puts "Width gia timokatalogo"+( width - width_gia_anoigma_mono_gia_edw.to_f).to_s
			puts "Height meta apo "+height.to_s
		    
		    width_index = widths.select do |k,v|
			  v.include?((width - width_gia_anoigma_mono_gia_edw.to_f).to_f)
			end.keys.first

			height_index = heights.select do |c,d|
			  d.include?(height.to_f)
			end.keys.first

			puts "Width meta apo epeksergasia"+width_index.to_s
			puts "Height meta apo epeksergasia"+height_index.to_s


		    ##Για καθε ανοιγμα τιμη
		    @col_data_heights = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';', headers:true) {|row| @col_data_heights << row[0]}
			#puts col_data_heights

			@col_data_widths = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';').with_index do |row, i| 
				if ( i == 0 )
					a = 0
					while a < 20 do
	   					@col_data_widths << row[a]
	   					a +=1
					end
				end
			end

			@thesi_width = 1
			@thesi_height = 1
			@timi = 0

			@col_data_widths.each_with_index do |width, i|
				if ( width.to_i == width_index )
					@thesi_width = i
				end
			end

			@col_data_heights.each_with_index do |height, i|
				if ( height.to_i == height_index )
					@thesi_height = i
				end
			end

			puts @thesi_width
			puts @thesi_height

			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';',headers:true ).with_index do |row, i| 
				if ( i == @thesi_height )
					@timi = row[@thesi_width]
				end
			end

			puts "Τιμή για άνοιγμα απο τιμοκατάλογο: "+@open_type.csv.to_s+" == "+@timi

			@price = @pricepanw + @timi.to_f

			puts "Τιμή γενικη συνδιασμος 3fylla: "+@price.to_s
		end

		@price_temp = @price.to_f


=begin
        ##Γενικη τιμη. Η τιμή χωρίς έξτρα. Μονο επιβάρινση γραμμης, λάστιχού και χρώματος. 
        #@price_temp = @open_type.send("h#{height_index}p#{width_index}".to_sym)
        if (result == "0.1")
        	@price_temp = Pricelist.where("code LIKE ? AND width LIKE ? AND height LIKE ?", "#{open_type_code}", "%#{width_index}%", "%#{height_index}%").first.price
        else
        	if ( @open_type.code == 100 )
    			@price_temp = Pricelist.where("code = ? AND width LIKE ? AND height LIKE ?", "20", "%#{width_index}%", "%#{height_index}%").first.price
    			@price_temp = @price_temp * 2
    			width = (width * 2)	
    		elsif ( @open_type.code == 101 )
    			@price_temp = Pricelist.where("code = ? AND width LIKE ? AND height LIKE ?", "4", "%#{width_index}%", "%#{height_index}%").first.price
    			@price_temp = @price_temp * 2
    			width = (width * 2)	
    		else
    			@price_temp = Pricelist.where("code = ? AND width LIKE ? AND height LIKE ?", "#{open_type_code}", "%#{width_index}%", "%#{height_index}%").first.price
    		end
        end
=end
        ## ΕΠΙΒΑΡΙΝΣΗ ΓΡΑΜΜΗΣ---
        @price_temp = @price_temp + (@price_temp * (@line.epivarinsi_line / 100))
        ## ΕΠΙΒΑΡΙΝΣΗ ΛΑΣΤΙΧΟΥ
        if ( @lastixa == "mauro_lastixo" )
        	@epiva_la = (@price_temp * (@line.epivarinsi_lastixo / 100))
        	@price_temp = @price_temp + (@price_temp * (@line.epivarinsi_lastixo / 100))
        end
        if ( @lastixa == "gkri_lastixo" )
        	@epiva_la = 0
        	@price_temp = @price_temp + (@price_temp * (@line.epivarinsi_gri / 100))
        end
        


        ################## Επιβαρινση χρωματων ################
        ################# Αν δεν εχω εχτρα χρωματα
        if ( @mesa_eksw == '2' )
          ep = @color.duo_pleura
        elsif ( @mesa_eksw == '1'  )
          ep = @color.mia_pleura
        end
        ################# Αν εχω και τα 2 εχτρα και για τις 2 πλευρες
        if (@mesa_eksw == '1' && !@color_deksia.nil? && !@color_fulou.nil?)
          color_array = [@color_deksia.mia_pleura, @color_aristera.mia_pleura, @color_panw.mia_pleura, @color_katw.mia_pleura, @color_fulou.mia_pleura, @color.mia_pleura ]
          ep = color_array[color_array.index(color_array.compact.max)]
        elsif (@mesa_eksw == '2' && !@color_deksia.nil? && !@color_fulou.nil?)
          color_array = [@color_deksia.duo_pleura, @color_aristera.duo_pleura, @color_panw.duo_pleura, @color_katw.duo_pleura, @color_fulou.duo_pleura ]
          ep = color_array[color_array.index(color_array.compact.max)]
        ################# Αν εχω μονο χρωματα κασας
        elsif (@mesa_eksw == '1' && !@color_deksia.nil? && @color_fulou.nil?)
          color_array = [@color_deksia.mia_pleura, @color_aristera.mia_pleura, @color_panw.mia_pleura, @color_katw.mia_pleura, @color.mia_pleura ]
          ep = color_array[color_array.index(color_array.compact.max)]
        elsif (@mesa_eksw == '2' && !@color_deksia.nil? && @color_fulou.nil?)
          color_array = [@color_deksia.duo_pleura, @color_aristera.duo_pleura, @color_panw.duo_pleura, @color_katw.duo_pleura ]
          ep = color_array[color_array.index(color_array.compact.max)]
          ################# Αν εχω μονο χρωματα φυλου
        elsif (@mesa_eksw == '1' && @color_deksia.nil? && !@color_fulou.nil?)
          color_array = [@color_fulou.mia_pleura, @color.mia_pleura ]
          ep = color_array[color_array.index(color_array.compact.max)]
        elsif (@mesa_eksw == '2' && @color_deksia.nil? && !@color_fulou.nil?)
          color_array = [@color_fulou.duo_pleura, @color.duo_pleura ]
          ep = color_array[color_array.index(color_array.compact.max)]
        end
        ##Νεα επιβαρυνση
        ep_mesa = @color.mia_pleura
        ep_eksw = @color_eksw.mia_pleura

        ep = ep_mesa + ep_eksw

        puts "Epivarinsi xrwmatos: "+ep.to_s

        ep_mesa_gia_pinaka = ( @price_temp * (ep_mesa / 100) )
        ep_eksw_gia_pinaka = ( @price_temp * (ep_eksw / 100) )

        @timi_mono_aspro_super_apli = @price

        ## ΤΙΜΗ ΧΩΡΙΣ ΕΧΤΡΑ ΑΠΛΗ = price.
        @price = @price_temp + ( @price_temp * (ep / 100) )

        puts "Apli timi: "+@price.to_s
        ####  ETXRA  #################
        ## Νεοι υπολογισμοι γιατι μπορει να αλλαζουν οι διαστασεις. Πάλι απο την αρχή.(height_neo, width_neo.)
        ## Η αρχική τιμή χωρίς εξτρα δεν αλλάζει. Ειναι price.
=begin
        if ( @open_type.code == 100 )
		    width_neo = (width_neo / 2)	
		end
		if ( @open_type.code == 101 )
		    width_neo = (width_neo / 2)	
		end
=end
=begin
        height_index = heights.select do |c,d|
			  d.include?(height_neo)
			end.keys.first
		width_index = widths.select do |k,v|
		  v.include?(width_neo)
		end.keys.first	


		@col_data_heights = []
		CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';', headers:true) {|row| @col_data_heights << row[0]}
		#puts col_data_heights

		@col_data_widths = []
		CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';').with_index do |row, i| 
			if ( i == 0 )
				a = 0
				while a < 20 do
   					@col_data_widths << row[a]
   					a +=1
				end
			end
		end

		@thesi_width = 1
		@thesi_height = 1
		@timi = 0

		@col_data_widths.each_with_index do |width, i|
			if ( width.to_i == width_index )
				@thesi_width = i
			end
		end

		@col_data_heights.each_with_index do |height, i|
			if ( height.to_i == height_index )
				@thesi_height = i
			end
		end

		puts @thesi_width
		puts @thesi_height

		CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';',headers:true ).with_index do |row, i| 
			if ( i == @thesi_height )
				@timi = row[@thesi_width]
			end
		end

		puts @timi
		
		#Geniika giati einai string
		@price_temp = @timi.to_f
=end
		@price_temp = 0

		arr = @open_type.table.split('|').collect! {|n| n.to_s}

		arr.map! { |element|
		    element.split(',').collect! {|n| n.to_s}
		}

		arr.each_with_index do |subarr, i|
		  puts "Ποσα col εχω: "+subarr.length.to_s
		  subarr.each_with_index do |anoigma, j|
		    puts "Γραμμη: "+i.to_s+" Στήλη: "+j.to_s+" Ανοιγμα: "+anoigma
		    #Για καθε row βρησκω το υψος
		    if( xwrisma_y_1 != "0" ) #duo upsos
		    	puts "Υψος: "+eval("xwrisma_y_#{i+1}")
		    	height_gia_anoigma = eval("xwrisma_y_#{i+1}")
		    else #ena upsos
		    	puts "Υψος: "+height_neo.to_s 
		    	height_gia_anoigma = height_neo
		    end
		    #Για καθε col το μήκος subarr.length ποσα col σε καθε row
		    if ( subarr.length == 1 )
		    	puts "Μήκος: "+width_neo.to_s
		    	width_gia_anoigma = width_neo
		    elsif ( subarr.length == 2 )
		    	puts "Μήκος: "+eval("xwrisma#{j+1}")
		    	width_gia_anoigma = eval("xwrisma#{j+1}")
		    elsif ( subarr.length == 3 )
		    	puts "Μήκος: "+eval("xwrisma3_#{j+1}")
		    	width_gia_anoigma = eval("xwrisma3_#{j+1}")
		    end

		    puts "Width meta apo "+width_gia_anoigma.class.to_s
			puts "Height meta apo "+height_gia_anoigma.class.to_s
		    
		    width_index = widths.select do |k,v|
			  v.include?(width_gia_anoigma.to_f)
			end.keys.first

			height_index = heights.select do |c,d|
			  d.include?(height_gia_anoigma.to_f)
			end.keys.first

			puts "Width meta apo epeksergasia"+width_index.to_s
			puts "Height meta apo epeksergasia"+height_index.to_s


		    ##Για καθε ανοιγμα τιμη
		    @col_data_heights = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';', headers:true) {|row| @col_data_heights << row[0]}
			#puts col_data_heights

			@col_data_widths = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';').with_index do |row, i| 
				if ( i == 0 )
					a = 0
					while a < 20 do
	   					@col_data_widths << row[a]
	   					a +=1
					end
				end
			end

			@thesi_width = 1
			@thesi_height = 1
			@timi = 0

			@col_data_widths.each_with_index do |width, i|
				if ( width.to_i == width_index )
					@thesi_width = i
				end
			end

			@col_data_heights.each_with_index do |height, i|
				if ( height.to_i == height_index )
					@thesi_height = i
				end
			end

			puts @thesi_width
			puts @thesi_height

			CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';',headers:true ).with_index do |row, i| 
				if ( i == @thesi_height )
					@timi = row[@thesi_width]
				end
			end

			puts "Τιμή για άνοιγμα: "+anoigma.to_s+" == "+@timi

			@price_temp = @price_temp + @timi.to_f
	
		  end#end mesa
		end#end eksw

		if ( (@open_type.id == 12) || (@open_type.id == 13) || (@open_type.id == 22) || (@open_type.id == 23) || (@open_type.id == 68) || (@open_type.id == 69) || (@open_type.id == 80) || (@open_type.id == 81) || (@open_type.id == 82) || (@open_type.id == 84) || (@open_type.id == 83))

			puts "Width gia timokatalogo"+width_neo.to_s
			puts "Height meta apo "+height_neo.to_s
		    
		  width_index = widths.select do |k,v|
			  v.include?(width_neo.to_f)
			end.keys.first

			height_index = heights.select do |c,d|
			  d.include?(height_neo.to_f)
			end.keys.first

			puts "Width meta apo epeksergasia"+width_index.to_s
			puts "Height meta apo epeksergasia"+height_index.to_s


		    ##Για καθε ανοιγμα τιμη
		    @col_data_heights = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';', headers:true) {|row| @col_data_heights << row[0]}
			#puts col_data_heights

			@col_data_widths = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';').with_index do |row, i| 
				if ( i == 0 )
					a = 0
					while a < 20 do
	   					@col_data_widths << row[a]
	   					a +=1
					end
				end
			end

			@thesi_width = 1
			@thesi_height = 1
			@timi = 0

			@col_data_widths.each_with_index do |width, i|
				if ( width.to_i == width_index )
					@thesi_width = i
				end
			end

			@col_data_heights.each_with_index do |height, i|
				if ( height.to_i == height_index )
					@thesi_height = i
				end
			end

			puts @thesi_width
			puts @thesi_height

			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';',headers:true ).with_index do |row, i| 
				if ( i == @thesi_height )
					@timi = row[@thesi_width]
				end
			end

			puts "Τιμή για άνοιγμα απο τιμοκατάλογο: "+@open_type.csv.to_s+" == "+@timi
      
      @timi = @timi.to_f
  		if ( (@open_type.id == 82) || (@open_type.id == 84) )
        @timi = @timi + @timi*0.5
      end
      
  		if ( (@open_type.id == 83) )
        @timi = 2*@timi
      end
      
			@price_temp = @timi
		end

		##Gia code == 16,17
		if ( (@open_type.id == 38) || (@open_type.id == 39) || (@open_type.id == 40) || (@open_type.id == 41) || (@open_type.id == 42) || (@open_type.id == 43)  )

			height_gia_anoigma_mono_gia_edw = 0
			@pricepanwtemp = 0

			arr = @open_type.table.split('|').collect! {|n| n.to_s}

			arr.map! { |element|
			    element.split(',').collect! {|n| n.to_s}
			}

			arr.each_with_index do |subarr, i|
			  puts "Ποσα col εχω: "+subarr.length.to_s
			  #Μονο για το επάνω
			  if ( i.to_s == "0" )

				  subarr.each_with_index do |anoigma, j|
				    puts "Γραμμη: "+i.to_s+" Στήλη: "+j.to_s+" Ανοιγμα: "+anoigma
				    #Για καθε row βρησκω το υψος
				    if( xwrisma_y_1 != "0" ) #duo upsos
				    	puts "Υψος: "+eval("xwrisma_y_#{i+1}")
				    	height_gia_anoigma = eval("xwrisma_y_#{i+1}")
				    else #ena upsos
				    	puts "Υψος: "+height_neo.to_s 
				    	height_gia_anoigma = height_neo
				    end
				    #Για καθε col το μήκος subarr.length ποσα col σε καθε row
				    if ( subarr.length == 1 )
				    	puts "Μήκος: "+width_neo.to_s
				    	width_gia_anoigma = width_neo
				    elsif ( subarr.length == 2 )
				    	puts "Μήκος: "+eval("xwrisma#{j+1}")
				    	width_gia_anoigma = eval("xwrisma#{j+1}")
				    elsif ( subarr.length == 3 )
				    	puts "Μήκος: "+eval("xwrisma3_#{j+1}")
				    	width_gia_anoigma = eval("xwrisma3_#{j+1}")
				    end

				    puts "Width meta apo "+width_gia_anoigma.class.to_s
					puts "Height meta apo "+height_gia_anoigma.class.to_s
				    
				    width_index = widths.select do |k,v|
					  v.include?(width_gia_anoigma.to_f)
					end.keys.first

					height_index = heights.select do |c,d|
					  d.include?(height_gia_anoigma.to_f)
					end.keys.first

					height_gia_anoigma_mono_gia_edw = height_gia_anoigma.to_f
					puts "height_gia_anoigma_mono_gia_edw "+height_gia_anoigma_mono_gia_edw.to_s

					puts "Width meta apo epeksergasia"+width_index.to_s
					puts "Height meta apo epeksergasia"+height_index.to_s


				    ##Για καθε ανοιγμα τιμη
				    @col_data_heights = []
					CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';', headers:true) {|row| @col_data_heights << row[0]}
					#puts col_data_heights

					@col_data_widths = []
					CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';').with_index do |row, i| 
						if ( i == 0 )
							a = 0
							while a < 20 do
			   					@col_data_widths << row[a]
			   					a +=1
							end
						end
					end

					@thesi_width = 1
					@thesi_height = 1
					@timi = 0

					@col_data_widths.each_with_index do |width, i|
						if ( width.to_i == width_index )
							@thesi_width = i
						end
					end

					@col_data_heights.each_with_index do |height, i|
						if ( height.to_i == height_index )
							@thesi_height = i
						end
					end

					puts @thesi_width
					puts @thesi_height

					CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';',headers:true ).with_index do |row, i| 
						if ( i == @thesi_height )
							@timi = row[@thesi_width]
						end
					end

					puts "Τιμή για άνοιγμα για πάνω: "+anoigma.to_s+" == "+@timi

					@pricepanwtemp = @pricepanwtemp + @timi.to_f
			
				  end#end mesa
				end#End if epanw
			end#end eksw

			puts "Width gia timokatalogo"+width_neo.to_s
			puts "Height meta apo "+(height_neo - height_gia_anoigma_mono_gia_edw.to_f).to_s
		    
		    width_index = widths.select do |k,v|
			  v.include?(width_neo.to_f)
			end.keys.first

			height_index = heights.select do |c,d|
			  d.include?((height_neo - height_gia_anoigma_mono_gia_edw.to_f).to_f)
			end.keys.first

			puts "Width meta apo epeksergasia"+width_index.to_s
			puts "Height meta apo epeksergasia"+height_index.to_s


		    ##Για καθε ανοιγμα τιμη
		    @col_data_heights = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';', headers:true) {|row| @col_data_heights << row[0]}
			#puts col_data_heights

			@col_data_widths = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';').with_index do |row, i| 
				if ( i == 0 )
					a = 0
					while a < 20 do
	   					@col_data_widths << row[a]
	   					a +=1
					end
				end
			end

			@thesi_width = 1
			@thesi_height = 1
			@timi = 0

			@col_data_widths.each_with_index do |width, i|
				if ( width.to_i == width_index )
					@thesi_width = i
				end
			end

			@col_data_heights.each_with_index do |height, i|
				if ( height.to_i == height_index )
					@thesi_height = i
				end
			end

			puts @thesi_width
			puts @thesi_height

			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';',headers:true ).with_index do |row, i| 
				if ( i == @thesi_height )
					@timi = row[@thesi_width]
				end
			end

			puts "Τιμή για άνοιγμα απο τιμοκατάλογο: "+@open_type.csv.to_s+" == "+@timi

			@price_temp = @pricepanwtemp + @timi.to_f

			puts "Τιμή γενικη συνδιασμος πάνω κάτω: "+@price_temp.to_s
		end

		##Gia code == 13_60, 25_63, 25_65
		if ( (@open_type.id == 60) || (@open_type.id == 62) || (@open_type.id == 65) || (@open_type.id == 67) )

			width_gia_anoigma_mono_gia_edw = 0
			@pricepanwtemp = 0

			arr = @open_type.table.split('|').collect! {|n| n.to_s}

			arr.map! { |element|
			    element.split(',').collect! {|n| n.to_s}
			}

			arr.each_with_index do |subarr, i|
			  puts "Ποσα col εχω: "+subarr.length.to_s
				  subarr.each_with_index do |anoigma, j|
				  	#Mono gia tin prwti stili
				  	if ( j.to_s == "0" )
				    puts "Γραμμη: "+i.to_s+" Στήλη: "+j.to_s+" Ανοιγμα: "+anoigma
				    #Για καθε row βρησκω το υψος
				    if( xwrisma_y_1 != "0" ) #duo upsos
				    	puts "Υψος: "+eval("xwrisma_y_#{i+1}")
				    	height_gia_anoigma = eval("xwrisma_y_#{i+1}")
				    else #ena upsos
				    	puts "Υψος: "+height_neo.to_s 
				    	height_gia_anoigma = height
				    end
				    #Για καθε col το μήκος subarr.length ποσα col σε καθε row
				    if ( subarr.length == 1 )
				    	puts "Μήκος: "+width_neo.to_s
				    	width_gia_anoigma = width
				    elsif ( subarr.length == 2 )
				    	puts "Μήκος: "+eval("xwrisma#{j+1}")
				    	width_gia_anoigma = eval("xwrisma#{j+1}")
				    elsif ( subarr.length == 3 )
				    	puts "Μήκος: "+eval("xwrisma3_#{j+1}")
				    	width_gia_anoigma = eval("xwrisma3_#{j+1}")
				    end

				    puts "Width meta apo "+width_gia_anoigma.class.to_s
					puts "Height meta apo "+height_gia_anoigma.class.to_s
				    
				    width_index = widths.select do |k,v|
					  v.include?(width_gia_anoigma.to_f)
					end.keys.first

					height_index = heights.select do |c,d|
					  d.include?(height_gia_anoigma.to_f)
					end.keys.first

					width_gia_anoigma_mono_gia_edw = width_gia_anoigma.to_f

					puts "Width meta apo epeksergasia"+width_index.to_s
					puts "Height meta apo epeksergasia"+height_index.to_s


				    ##Για καθε ανοιγμα τιμη
				    @col_data_heights = []
					CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';', headers:true) {|row| @col_data_heights << row[0]}
					#puts col_data_heights

					@col_data_widths = []
					CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';').with_index do |row, i| 
						if ( i == 0 )
							a = 0
							while a < 20 do
			   					@col_data_widths << row[a]
			   					a +=1
							end
						end
					end

					@thesi_width = 1
					@thesi_height = 1
					@timi = 0

					@col_data_widths.each_with_index do |width, i|
						if ( width.to_i == width_index )
							@thesi_width = i
						end
					end

					@col_data_heights.each_with_index do |height, i|
						if ( height.to_i == height_index )
							@thesi_height = i
						end
					end

					puts @thesi_width
					puts @thesi_height

					CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';',headers:true ).with_index do |row, i| 
						if ( i == @thesi_height )
							@timi = row[@thesi_width]
						end
					end

					puts "Τιμή για άνοιγμα για πάνω: "+anoigma.to_s+" == "+@timi

					@pricepanwtemp = @pricepanwtemp + @timi.to_f
				  end#Mono gia prwti stili
				  end#end mesa
			end#end eksw

			puts "Width gia timokatalogo"+( width_neo - width_gia_anoigma_mono_gia_edw.to_f).to_s
			puts "Height meta apo "+height_neo.to_s
		    
		    width_index = widths.select do |k,v|
			  v.include?((width_neo - width_gia_anoigma_mono_gia_edw.to_f).to_f)
			end.keys.first

			height_index = heights.select do |c,d|
			  d.include?(height_neo.to_f)
			end.keys.first

			puts "Width meta apo epeksergasia"+width_index.to_s
			puts "Height meta apo epeksergasia"+height_index.to_s


		    ##Για καθε ανοιγμα τιμη
		    @col_data_heights = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';', headers:true) {|row| @col_data_heights << row[0]}
			#puts col_data_heights

			@col_data_widths = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';').with_index do |row, i| 
				if ( i == 0 )
					a = 0
					while a < 20 do
	   					@col_data_widths << row[a]
	   					a +=1
					end
				end
			end

			@thesi_width = 1
			@thesi_height = 1
			@timi = 0

			@col_data_widths.each_with_index do |width, i|
				if ( width.to_i == width_index )
					@thesi_width = i
				end
			end

			@col_data_heights.each_with_index do |height, i|
				if ( height.to_i == height_index )
					@thesi_height = i
				end
			end

			puts @thesi_width
			puts @thesi_height

			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';',headers:true ).with_index do |row, i| 
				if ( i == @thesi_height )
					@timi = row[@thesi_width]
				end
			end

			puts "Τιμή για άνοιγμα απο τιμοκατάλογο: "+@open_type.csv.to_s+" == "+@timi

			@price_temp = @pricepanwtemp + @timi.to_f

			puts "Τιμή γενικη συνδιασμος 3fylla: "+@price.to_s
		end

		##Gia code == 13_60, 25_63, 25_65
		if ( (@open_type.id == 61) || (@open_type.id == 63) || (@open_type.id == 64) || (@open_type.id == 66)   )

			width_gia_anoigma_mono_gia_edw = 0
			@pricepanwtemp = 0

			arr = @open_type.table.split('|').collect! {|n| n.to_s}

			arr.map! { |element|
			    element.split(',').collect! {|n| n.to_s}
			}

			arr.each_with_index do |subarr, i|
			  puts "Ποσα col εχω: "+subarr.length.to_s
				  subarr.each_with_index do |anoigma, j|
				  	#Mono gia tin prwti stili
				  	if ( j.to_s == "2" )
				    puts "Γραμμη: "+i.to_s+" Στήλη: "+j.to_s+" Ανοιγμα: "+anoigma
				    #Για καθε row βρησκω το υψος
				    if( xwrisma_y_1 != "0" ) #duo upsos
				    	puts "Υψος: "+eval("xwrisma_y_#{i+1}")
				    	height_gia_anoigma = eval("xwrisma_y_#{i+1}")
				    else #ena upsos
				    	puts "Υψος: "+height_neo.to_s 
				    	height_gia_anoigma = height
				    end
				    #Για καθε col το μήκος subarr.length ποσα col σε καθε row
				    if ( subarr.length == 1 )
				    	puts "Μήκος: "+width_neo.to_s
				    	width_gia_anoigma = width
				    elsif ( subarr.length == 2 )
				    	puts "Μήκος: "+eval("xwrisma#{j+1}")
				    	width_gia_anoigma = eval("xwrisma#{j+1}")
				    elsif ( subarr.length == 3 )
				    	puts "Μήκος: "+eval("xwrisma3_#{j+1}")
				    	width_gia_anoigma = eval("xwrisma3_#{j+1}")
				    end

				    puts "Width meta apo "+width_gia_anoigma.class.to_s
					puts "Height meta apo "+height_gia_anoigma.class.to_s
				    
				    width_index = widths.select do |k,v|
					  v.include?(width_gia_anoigma.to_f)
					end.keys.first

					height_index = heights.select do |c,d|
					  d.include?(height_gia_anoigma.to_f)
					end.keys.first

					width_gia_anoigma_mono_gia_edw = width_gia_anoigma.to_f

					puts "Width meta apo epeksergasia"+width_index.to_s
					puts "Height meta apo epeksergasia"+height_index.to_s


				    ##Για καθε ανοιγμα τιμη
				    @col_data_heights = []
					CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';', headers:true) {|row| @col_data_heights << row[0]}
					#puts col_data_heights

					@col_data_widths = []
					CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';').with_index do |row, i| 
						if ( i == 0 )
							a = 0
							while a < 20 do
			   					@col_data_widths << row[a]
			   					a +=1
							end
						end
					end

					@thesi_width = 1
					@thesi_height = 1
					@timi = 0

					@col_data_widths.each_with_index do |width, i|
						if ( width.to_i == width_index )
							@thesi_width = i
						end
					end

					@col_data_heights.each_with_index do |height, i|
						if ( height.to_i == height_index )
							@thesi_height = i
						end
					end

					puts @thesi_width
					puts @thesi_height

					CSV.foreach("#{Rails.root}/public/pricelist/"+anoigma+".csv", col_sep: ';',headers:true ).with_index do |row, i| 
						if ( i == @thesi_height )
							@timi = row[@thesi_width]
						end
					end

					puts "Τιμή για άνοιγμα για πάνω: "+anoigma.to_s+" == "+@timi

					@pricepanwtemp = @pricepanwtemp + @timi.to_f
				  end#Mono gia prwti stili
				  end#end mesa
			end#end eksw

			puts "Width gia timokatalogo"+( width_neo - width_gia_anoigma_mono_gia_edw.to_f).to_s
			puts "Height meta apo "+height_neo.to_s
		    
		    width_index = widths.select do |k,v|
			  v.include?((width_neo - width_gia_anoigma_mono_gia_edw.to_f).to_f)
			end.keys.first

			height_index = heights.select do |c,d|
			  d.include?(height_neo.to_f)
			end.keys.first

			puts "Width meta apo epeksergasia"+width_index.to_s
			puts "Height meta apo epeksergasia"+height_index.to_s


		    ##Για καθε ανοιγμα τιμη
		    @col_data_heights = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';', headers:true) {|row| @col_data_heights << row[0]}
			#puts col_data_heights

			@col_data_widths = []
			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';').with_index do |row, i| 
				if ( i == 0 )
					a = 0
					while a < 20 do
	   					@col_data_widths << row[a]
	   					a +=1
					end
				end
			end

			@thesi_width = 1
			@thesi_height = 1
			@timi = 0

			@col_data_widths.each_with_index do |width, i|
				if ( width.to_i == width_index )
					@thesi_width = i
				end
			end

			@col_data_heights.each_with_index do |height, i|
				if ( height.to_i == height_index )
					@thesi_height = i
				end
			end

			puts @thesi_width
			puts @thesi_height

			CSV.foreach("#{Rails.root}/public/pricelist/"+@open_type.csv+".csv", col_sep: ';',headers:true ).with_index do |row, i| 
				if ( i == @thesi_height )
					@timi = row[@thesi_width]
				end
			end

			puts "Τιμή για άνοιγμα απο τιμοκατάλογο: "+@open_type.csv.to_s+" == "+@timi

			@price_temp = @pricepanwtemp + @timi.to_f

			puts "Τιμή γενικη συνδιασμος 3fylla: "+@price.to_s
		end

		puts "Price me extra: "+@price_temp.to_s

=begin
		if (@open_type.code == 6 || @open_type.code == 6.1 || @open_type.code == 7) 
			if width_neo <= 1000 
				width_index = 700
			end
		end
		if (@open_type.code === 8 || @open_type.code === 8.1 || @open_type.code === 9 || @open_type.code === 10) 
			if width_neo <= 1200 
				width_index = 1201
			end
		end
		if (@open_type.code === 11 || @open_type.code === 11.1) 
			if width_neo <= 1500 
				width_index = 1501
			end
		end
		if (@open_type.code === 12 || @open_type.code === 12.1 || @open_type.code === 13) 
			if width_neo <= 2100 
				width_index = 2101
			end
		end
		if (@open_type.code === 14 || @open_type.code === 14.1 || @open_type.code === 15) 
			if height_neo <= 1300 
				height_index = 1301
			end
		end
		if (@open_type.code == 16 || @open_type.code == 16.1 || @open_type.code == 17) 
			if width_neo <= 1200 
				width_index = 1201
			end
			if height_neo <= 1500 
				height_index = 1501
			end
		end
		if (@open_type.code == 18 ) 
			if width_neo <= 1200 
				width_index = 1201
			end
			if height_neo <= 1400 
				height_index = 1401
			end
		end
		## Μπαλκονια
		if (@open_type.code == 19 || @open_type.code == 20 || @open_type.code == 100 ) 
			if width_neo <= 700 
				width_index = 701
			end
			if height_neo <= 1900 
				height_index = 1901
			end
		end
		if (@open_type.code == 21 ) 
			if width_neo <= 700 
				width_index = 701
			end
			if height_neo <= 2400 
				height_index = 2401
			end
		end
		if (@open_type.code == 22 || @open_type.code == 23 || @open_type.code == 23.1 || @open_type.code == 24 || @open_type.code == 27 ) 
			if width_neo <= 1200 
				width_index = 1201
			end
			if height_neo <= 1900 
				height_index = 1901
			end
		end
		if (@open_type.code == 25 || @open_type.code == 26 || @open_type.code == 26.1 ) 
			if width_neo <= 2001 
				width_index = 2001
			end
			if height_neo <= 1900 
				height_index = 1901
			end
		end
=end
=begin
		if (result == "0.1")
        	@price_temp = Pricelist.where("code LIKE ? AND width LIKE ? AND height LIKE ?", "#{open_type_code}", "%#{width_index}%", "%#{height_index}%").first.price
        else
        	if ( @open_type.code == 100 )
    			@price_temp = Pricelist.where("code = ? AND width LIKE ? AND height LIKE ?", "20", "%#{width_index}%", "%#{height_index}%").first.price
    			@price_temp = @price_temp * 2
    			width_neo = (width_neo * 2)	
    		elsif ( @open_type.code == 101 )
    			@price_temp = Pricelist.where("code = ? AND width LIKE ? AND height LIKE ?", "4", "%#{width_index}%", "%#{height_index}%").first.price
    			@price_temp = @price_temp * 2
    			width_neo = (width_neo * 2)	
    		else
    			@price_temp = Pricelist.where("code = ? AND width LIKE ? AND height LIKE ?", "#{open_type_code}", "%#{width_index}%", "%#{height_index}%").first.price
    		end
        end 
=end
	    ## ΕΠΙΒΑΡΙΝΣΗ ΓΡΑΜΜΗΣ
	    @price_temp = @price_temp + (@price_temp * (@line.epivarinsi_line / 100))
	    ## ΕΠΙΒΑΡΙΝΣΗ ΛΑΣΤΙΧΟΥ
	    ## ΕΠΙΒΑΡΙΝΣΗ ΛΑΣΤΙΧΟΥ
        if ( @lastixa == "mauro_lastixo" )
        	@epiva_la = (@price_temp * (@line.epivarinsi_lastixo / 100))
        	@price_temp = @price_temp + (@price_temp * (@line.epivarinsi_lastixo / 100))
        end
        if ( @lastixa == "gkri_lastixo" )
        	@epiva_la = 0
        	@price_temp = @price_temp + (@price_temp * (@line.epivarinsi_gri / 100))
        end

       #######EXTRA #############
       ## price extra ειναι μονο η τιμη ολων των εχτρας μαζι
       @price_extra = 0
       ## Price new ειναι η τιμη του κουφωματος με τις νεες διστασεις
       @price_new = 0
       ##Me xrwmata. Πέρνω το ep που το έχω απο πριν.
	   @price_new = @price_temp + ( @price_temp * (ep / 100) )

        ## Εδώ προσθέτω στην price_extra όλα τα extra που επιλέγω. 
	    ## TIMI ME ROLA MONO tzamia
	    if ( !@tzamia0.nil? )
	    	if ( width_gia_vasi_new != 0)
	    		pr_tz0 =( ( (width_gia_vasi_new * height_gia_vasi_new) * @tzamia0.price.to_f ) / 1000000 )
	    		tm_p_tzami0 = width_gia_vasi_new
	    		tm_u_tzami0 = height_gia_vasi_new
	    		tm_tz_0 = (width_gia_vasi_new * height_gia_vasi_new) / 1000000
	    	else
	    		pr_tz0 =( ( (width * height) * @tzamia0.price.to_f ) / 1000000 )
	    		tm_p_tzami0 = width
	    		tm_u_tzami0 = height
	    		tm_tz_0 = (width * height) / 1000000
	    	end
	    	tzami0_cat = params[:tzami0_cat]
	    	@price_extra = @price_extra + pr_tz0
	    end
	    if ( !@tzamia.nil? )
	    	if ( width_gia_vasi_new != 0)
	    		pr_tz =( ( (width_gia_vasi_new * height_gia_vasi_new) * @tzamia.price.to_f ) / 1000000 )
	    		tm_p_tzami1 = width_gia_vasi_new
	    		tm_u_tzami1 = height_gia_vasi_new
	    		tm_tz_1 = (width_gia_vasi_new * height_gia_vasi_new) / 1000000
	    	else
	    		pr_tz =( ( (width * height) * @tzamia.price.to_f ) / 1000000 )
	    		tm_p_tzami1 = width
	    		tm_u_tzami1 = height
	    		tm_tz_1 = (width * height) / 1000000
	    	end
	    	tzami1_cat = params[:tzami1_cat]
	    	@price_extra = @price_extra + pr_tz
	    end

	    if ( !@tzamia2.nil? )
	    	if ( width_gia_vasi_new != 0)
	    		pr_tz2 =( ( (width_gia_vasi_new * height_gia_vasi_new) * @tzamia2.price.to_f ) / 1000000 )
	    		tm_p_tzami2 = width_gia_vasi_new
	    		tm_u_tzami2 = height_gia_vasi_new
	    		tm_tz_2 = (width_gia_vasi_new * height_gia_vasi_new) / 1000000
	    	else
	    		pr_tz2 =( ( (width * height) * @tzamia2.price.to_f ) / 1000000 )
	    		tm_p_tzami2 = width
	    		tm_u_tzami2 = height
	    		tm_tz_2 = (width * height) / 1000000
	    	end
	    	tzami2_cat = params[:tzami2_cat]
	    	@price_extra = @price_extra + pr_tz2
	    end
	    #Genika tm kai upsoi
	    if ( width_gia_vasi_new != 0)
			tm_genika_mesa = (width_gia_vasi_new * height_gia_vasi_new) / 1000000
			up_mesa = height_gia_vasi_new
			pl_mesa = width_gia_vasi_new
		else
			tm_genika_mesa = (width * height) / 1000000
			up_mesa = height
			pl_mesa = width
		end
		if ( !@typos_katw_1.nil? )
			height_mesa_meta_apo_typo = up_mesa + @typos_katw_1.height
			tm_meta_apo_typo = (height_mesa_meta_apo_typo * pl_mesa) / 1000000
			mikos_eksw = width
		else
			height_mesa_meta_apo_typo = up_mesa
			tm_meta_apo_typo = (height_mesa_meta_apo_typo * pl_mesa) / 1000000
			mikos_eksw = width
		end

        up_od = false
	    if ( !@odoigos.nil? )
	    	if ( (@up_odoigou.to_f != 0.0) && (@up_odoigou.to_f > 0.0)  )
	    		pr_odoig =( ( (@up_odoigou.to_f) * 2 * @odoigos.price.to_f ) / 1000 )#( ( (height_rol_new) * @odoigos.price.to_f ) / 1000 )
        		tm_od = ((@up_odoigou.to_f) * 2) / 1000#(height_rol_new) / 1000
        		timi_m_odoigou = @odoigos.price
    			@price_extra = @price_extra + pr_odoig  
    			odoigos_val = @up_odoigou.to_f
	    	else
	    		pr_odoig =( ( (height_mesa_meta_apo_typo.to_f) * 2 * @odoigos.price.to_f ) / 1000 )#( ( (height_rol_new) * @odoigos.price.to_f ) / 1000 )
        		tm_od = ((height_mesa_meta_apo_typo.to_f) * 2) / 1000#(height_rol_new) / 1000
        		timi_m_odoigou = @odoigos.price
    			@price_extra = @price_extra + pr_odoig  
    			odoigos_val = height_mesa_meta_apo_typo.to_f
	    	end
	    end

        ##TIMI ME ROLA MONO EPIKATHIMENO
        pl_ep = false
        up_ep = false
	    if ( !@epik_rolo.nil? )
	    	if ( (@pl_rol_ep.to_f != 0.0) && (@pl_rol_ep.to_f > 0.0) && (@up_rol_ep.to_f != 0.0) && (@up_rol_ep.to_f > 0.0) )
	    		tm_ep = (@pl_rol_ep.to_f * @up_rol_ep.to_f) / 1000000#(width_rol_new * height_rol_new) / 1000000
            	pr_epik =( ( (@pl_rol_ep.to_f * @up_rol_ep.to_f) * @epik_rolo.price.to_f ) / 1000000 ) #( ( (width_rol_new * height_rol_new) * @epik_rolo.price.to_f ) / 1000000 )
	    		timi_m_epik = @epik_rolo.price
	    		@price_extra = @price_extra + pr_epik
	    		epik_val_height = @up_rol_ep.to_f
	    		epik_val_width = @pl_rol_ep.to_f 
	    	elsif ( (@pl_rol_ep.to_f != 0.0) && (@pl_rol_ep.to_f > 0.0) )
	    		tm_ep =  (@pl_rol_ep.to_f * height.to_f)/ 1000000#(@pl_rol_ep.to_f * height_mesa_meta_apo_typo.to_f) / 1000000#(width_rol_new * height_rol_new) / 1000000
            	pr_epik =   ( ( (@pl_rol_ep.to_f * height.to_f) * @epik_rolo.price.to_f ) / 1000000 )#( ( (@pl_rol_ep.to_f * height_mesa_meta_apo_typo.to_f) * @epik_rolo.price.to_f ) / 1000000 ) #( ( (width_rol_new * height_rol_new) * @epik_rolo.price.to_f ) / 1000000 )
	    		timi_m_epik = @epik_rolo.price
	    		@price_extra = @price_extra + pr_epik
	    		epik_val_height = height.to_f#height_mesa_meta_apo_typo.to_f
	    		epik_val_width = @pl_rol_ep.to_f 
	    	elsif (@up_rol_ep.to_f != 0.0) && (@up_rol_ep.to_f > 0.0)
	    		tm_ep = (width.to_f * @up_rol_ep.to_f) / 1000000#(width_rol_new * height_rol_new) / 1000000
            	pr_epik =( ( (width.to_f * @up_rol_ep.to_f) * @epik_rolo.price.to_f ) / 1000000 ) #( ( (width_rol_new * height_rol_new) * @epik_rolo.price.to_f ) / 1000000 )
	    		timi_m_epik = @epik_rolo.price
	    		@price_extra = @price_extra + pr_epik
	    		epik_val_height = @up_rol_ep.to_f
	    		epik_val_width = width.to_f
	    	else
	    		tm_ep = (width.to_f * height.to_f) / 1000000#(width.to_f * height_mesa_meta_apo_typo.to_f) / 1000000#(width_rol_new * height_rol_new) / 1000000
            	pr_epik =( ( (width.to_f * height.to_f) * @epik_rolo.price.to_f ) / 1000000 ) #( ( (width.to_f * height_mesa_meta_apo_typo.to_f) * @epik_rolo.price.to_f ) / 1000000 ) #( ( (width_rol_new * height_rol_new) * @epik_rolo.price.to_f ) / 1000000 )
	    		timi_m_epik = @epik_rolo.price
	    		@price_extra = @price_extra + pr_epik
	    		epik_val_height = height.to_f#height_mesa_meta_apo_typo.to_f
	    		epik_val_width = width.to_f 
	    	end
	    end
        
        pl_ek = false
        up_ek = false
        ##TIMI ME ROLA MONO EKSOTERIKO
        if ( !@ekso_rolo.nil? )
	    	if ( (@pl_rol_ek.to_f != 0.0) && (@pl_rol_ek.to_f > 0.0) && (@up_rol_ek.to_f != 0.0) && (@up_rol_ek.to_f > 0.0) )
	    		tm_ek = (@pl_rol_ek.to_f * @up_rol_ek.to_f) / 1000000#(width_rol_new * height_rol_new) / 1000000
            	pr_ekso =( ( (@pl_rol_ek.to_f * @up_rol_ek.to_f) * @ekso_rolo.price.to_f ) / 1000000 ) #( ( (width_rol_new * height_rol_new) * @epik_rolo.price.to_f ) / 1000000 )
	    		timi_m_ekso = @ekso_rolo.price
	    		@price_extra = @price_extra + pr_ekso
	    		ekso_val_height = @up_rol_ek.to_f
	    		ekso_val_width = @pl_rol_ek.to_f 
	    	elsif ( (@pl_rol_ek.to_f != 0.0) && (@pl_rol_ek.to_f > 0.0) )
	    		tm_ek = (@pl_rol_ek.to_f * height.to_f) / 1000000#(@pl_rol_ek.to_f * height_mesa_meta_apo_typo.to_f) / 1000000#(width_rol_new * height_rol_new) / 1000000
            	pr_ekso = ( ( (@pl_rol_ek.to_f * height.to_f) * @ekso_rolo.price.to_f ) / 1000000 )#( ( (@pl_rol_ek.to_f * height_mesa_meta_apo_typo.to_f) * @ekso_rolo.price.to_f ) / 1000000 ) #( ( (width_rol_new * height_rol_new) * @epik_rolo.price.to_f ) / 1000000 )
	    		timi_m_ekso = @ekso_rolo.price
	    		@price_extra = @price_extra + pr_ekso
	    		ekso_val_height = height.to_f#height_mesa_meta_apo_typo.to_f
	    		ekso_val_width = @pl_rol_ek.to_f 
	    	elsif (@up_rol_ek.to_f != 0.0) && (@up_rol_ek.to_f > 0.0)
	    		tm_ek = (width.to_f * @up_rol_ek.to_f) / 1000000#(width_rol_new * height_rol_new) / 1000000
            	pr_ekso =( ( (width.to_f * @up_rol_ek.to_f) * @ekso_rolo.price.to_f ) / 1000000 ) #( ( (width_rol_new * height_rol_new) * @epik_rolo.price.to_f ) / 1000000 )
	    		timi_m_ekso = @ekso_rolo.price
	    		@price_extra = @price_extra + pr_ekso
	    		ekso_val_height = @up_rol_ek.to_f
	    		ekso_val_width = width.to_f
	    	else
	    		tm_ek =(width.to_f * height.to_f) / 1000000 #(width.to_f * height_mesa_meta_apo_typo.to_f) / 1000000#(width_rol_new * height_rol_new) / 1000000
            	pr_ekso =( ( (width.to_f * height.to_f) * @ekso_rolo.price.to_f ) / 1000000 )#( ( (width.to_f * height_mesa_meta_apo_typo.to_f) * @ekso_rolo.price.to_f ) / 1000000 ) #( ( (width_rol_new * height_rol_new) * @epik_rolo.price.to_f ) / 1000000 )
	    		timi_m_ekso = @ekso_rolo.price
	    		@price_extra = @price_extra + pr_ekso
	    		ekso_val_height = height.to_f#height_mesa_meta_apo_typo.to_f
	    		ekso_val_width = width.to_f 
	    	end
	    end

        pl_pe = false
        up_pe = false
        ##ΤΙΜΗ ΜΕ ΠΕΡΣΙΔΑ
        if ( !@persida.nil? )
	    	if ( (@pl_persidas.to_f != 0.0) && (@pl_persidas.to_f > 0.0) && (@up_persidas.to_f != 0.0) && (@up_persidas.to_f > 0.0) )
	    		tm_per = (@pl_persidas.to_f * @up_persidas.to_f) / 1000000#(width_rol_new * height_rol_new) / 1000000
            	pr_per =( ( (@pl_persidas.to_f * @up_persidas.to_f) * @persida.price.to_f ) / 1000000 ) #( ( (width_rol_new * height_rol_new) * @epik_rolo.price.to_f ) / 1000000 )
	    		timi_m_persidas = @persida.price
	    		@price_extra = @price_extra + pr_per
	    		persida_val_height = @up_persidas.to_f
	    		persida_val_width = @pl_persidas.to_f 
	    	elsif ( (@pl_persidas.to_f != 0.0) && (@pl_persidas.to_f > 0.0) )
	    		tm_per = (@pl_persidas.to_f * height.to_f) / 1000000#(@pl_persidas.to_f * height_mesa_meta_apo_typo.to_f) / 1000000#(width_rol_new * height_rol_new) / 1000000
            	pr_per =( ( (@pl_persidas.to_f * height.to_f) * @persida.price.to_f ) / 1000000 )#( ( (@pl_persidas.to_f * height_mesa_meta_apo_typo.to_f) * @persida.price.to_f ) / 1000000 ) #( ( (width_rol_new * height_rol_new) * @epik_rolo.price.to_f ) / 1000000 )
	    		timi_m_persidas = @persida.price
	    		@price_extra = @price_extra + pr_per
	    		persida_val_height = height._to_f#height_mesa_meta_apo_typo.to_f
	    		persida_val_width = @pl_persidas.to_f 
	    	elsif (@up_persidas.to_f != 0.0) && (@up_persidas.to_f > 0.0)
	    		tm_per = (width.to_f * @up_persidas.to_f) / 1000000#(width_rol_new * height_rol_new) / 1000000
            	pr_per =( ( (width.to_f * @up_persidas.to_f) * @persida.price.to_f ) / 1000000 ) #( ( (width_rol_new * height_rol_new) * @epik_rolo.price.to_f ) / 1000000 )
	    		timi_m_persidas = @persida.price
	    		@price_extra = @price_extra + pr_per
	    		persida_val_height = @up_persidas.to_f
	    		persida_val_width = width.to_f
	    	else
	    		tm_per = (width.to_f * height.to_f) / 1000000#(width.to_f * height_mesa_meta_apo_typo.to_f) / 1000000#(width_rol_new * height_rol_new) / 1000000
            	pr_per =( ( (width.to_f * height.to_f) * @persida.price.to_f ) / 1000000 )#( ( (width.to_f * height_mesa_meta_apo_typo.to_f) * @persida.price.to_f ) / 1000000 ) #( ( (width_rol_new * height_rol_new) * @epik_rolo.price.to_f ) / 1000000 )
	    		timi_m_persidas = @persida.price
	    		@price_extra = @price_extra + pr_per
	    		persida_val_height = height.to_f#height_mesa_meta_apo_typo.to_f
	    		persida_val_width = width.to_f 
	    	end
	    end
      

        if ( prostasia != "0" )
            if ( width_gia_vasi_new != 0)
	    		width_n = width_gia_vasi_new
	    	else
	    		width_n = width
	    	end
          	pro = ((width_n * TypoiProstasia.all.first.price.to_f) / 1000 )
          	pro_name = TypoiProstasia.all.first.name
          	@price_extra = @price_extra + pro
          	tm_p_prostasia = width_n
          	timi_m_p_prostasia = TypoiProstasia.all.first.price.to_f

        end
        
        ##TIMH ME ΠΡΟΦΙΛ
        profil_sum = 0


        ### Νεα προφιλ
        if ( !@profil_deksia_1.nil? )
        	if ( width_gia_vasi_new != 0)
	    		width_n = width_gia_vasi_new
	    	else
	    		width_n = width
	    	end
	    	if ( height_gia_vasi_new != 0)
	    		height_n = height_gia_vasi_new
	    	else
	    		height_n = height
	    	end
	    	width_deksia = @profil_deksia_1.width
	    	height_deksia = height_n
	    	if ( !@epik_rolo.nil? )
	    		height_deksia = height_deksia #+ @epik_rolo.height
	    	end
	    	if ( !@profil_panw_1.nil? && !@epik_rolo.nil? )
	    		height_deksia = height_deksia + (@profil_panw_1.height * @numero_panw_1)
	    	end
	    	if ( !@profil_panw_2.nil? && !@epik_rolo.nil? )
	    		height_deksia = height_deksia + (@profil_panw_2.height * @numero_panw_2)
	    	end
	    	if ( !@profil_panw_3.nil? && !@epik_rolo.nil? )
	    		height_deksia = height_deksia + (@profil_panw_3.height * @numero_panw_3)
	    	end
	      timi_profil_deksia_1 = ( ( (1 * height_deksia) * @profil_deksia_1.price.to_f ) / 1000 ) * @numero_deksia_1
	      tm_p_pd1 = width_deksia
	      tm_u_pd1 = height_deksia
          @price_extra = @price_extra + ( ( (1 * height_deksia) * @profil_deksia_1.price.to_f ) / 1000 ) * @numero_deksia_1
          profil_sum = profil_sum + ( @profil_deksia_1.price * @numero_deksia_1 )
        end
        if ( !@profil_deksia_2.nil? )
          if ( width_gia_vasi_new != 0)
	    		width_n = width_gia_vasi_new
	    	else
	    		width_n = width
	    	end
	    	if ( height_gia_vasi_new != 0)
	    		height_n = height_gia_vasi_new
	    	else
	    		height_n = height
	    	end
	    	width_deksia = @profil_deksia_2.width
	    	height_deksia = height_n
	    	if ( !@epik_rolo.nil? )
	    		height_deksia = height_deksia #+ @epik_rolo.height
	    	end
	    	if ( !@profil_panw_1.nil? && !@epik_rolo.nil? )
	    		height_deksia = height_deksia + (@profil_panw_1.height * @numero_panw_1)
	    	end
	    	if ( !@profil_panw_2.nil? && !@epik_rolo.nil? )
	    		height_deksia = height_deksia + (@profil_panw_2.height * @numero_panw_2)
	    	end
	    	if ( !@profil_panw_3.nil? && !@epik_rolo.nil? )
	    		height_deksia = height_deksia + (@profil_panw_3.height * @numero_panw_3)
	    	end
	      timi_profil_deksia_2 = ( ( (1 * height_deksia) * @profil_deksia_2.price.to_f ) / 1000 ) * @numero_deksia_2
	      tm_p_pd2 = width_deksia
	      tm_u_pd2 = height_deksia
          @price_extra = @price_extra + ( ( (1 * height_deksia) * @profil_deksia_2.price.to_f ) / 1000 ) * @numero_deksia_2
          profil_sum = profil_sum + ( @profil_deksia_2.price * @numero_deksia_2 )
        end
        if ( !@profil_deksia_3.nil? )
          if ( width_gia_vasi_new != 0)
	    		width_n = width_gia_vasi_new
	    	else
	    		width_n = width
	    	end
	    	if ( height_gia_vasi_new != 0)
	    		height_n = height_gia_vasi_new
	    	else
	    		height_n = height
	    	end
	    	width_deksia = @profil_deksia_3.width
	    	height_deksia = height_n
	    	if ( !@epik_rolo.nil? )
	    		height_deksia = height_deksia #+ @epik_rolo.height
	    	end
	    	if ( !@profil_panw_1.nil? && !@epik_rolo.nil? )
	    		height_deksia = height_deksia + (@profil_panw_1.height * @numero_panw_1)
	    	end
	    	if ( !@profil_panw_2.nil? && !@epik_rolo.nil? )
	    		height_deksia = height_deksia + (@profil_panw_2.height * @numero_panw_2)
	    	end
	    	if ( !@profil_panw_3.nil? && !@epik_rolo.nil? )
	    		height_deksia = height_deksia + (@profil_panw_3.height * @numero_panw_3)
	    	end
	      timi_profil_deksia_3 = ( ( (1 * height_deksia) * @profil_deksia_3.price.to_f ) / 1000 ) * @numero_deksia_3
	      tm_p_pd3 = width_deksia
	      tm_u_pd3 = height_deksia
          @price_extra = @price_extra + ( ( (1 * height_deksia) * @profil_deksia_3.price.to_f ) / 1000 ) * @numero_deksia_3
          profil_sum = profil_sum + ( @profil_deksia_3.price * @numero_deksia_3 )
        end

        if ( !@profil_aristera_1.nil? )
        	if ( width_gia_vasi_new != 0)
	    		width_n = width_gia_vasi_new
	    	else
	    		width_n = width
	    	end
	    	if ( height_gia_vasi_new != 0)
	    		height_n = height_gia_vasi_new
	    	else
	    		height_n = height
	    	end
	    	width_deksia = @profil_aristera_1.width
	    	height_deksia = height_n
	    	if ( !@epik_rolo.nil? )
	    		height_deksia = height_deksia #+ @epik_rolo.height
	    	end
	    	if ( !@profil_panw_1.nil? && !@epik_rolo.nil? )
	    		height_deksia = height_deksia + (@profil_panw_1.height * @numero_panw_1)
	    	end
	    	if ( !@profil_panw_2.nil? && !@epik_rolo.nil? )
	    		height_deksia = height_deksia + (@profil_panw_2.height * @numero_panw_2)
	    	end
	    	if ( !@profil_panw_3.nil? && !@epik_rolo.nil? )
	    		height_deksia = height_deksia + (@profil_panw_3.height * @numero_panw_3)
	    	end
	      timi_profil_aristera_1 = ( ( (1 * height_deksia) * @profil_aristera_1.price.to_f ) / 1000 ) * @numero_aristera_1 
	      tm_p_pa1 = width_deksia
	      tm_u_pa1 = height_deksia
          @price_extra = @price_extra + ( ( (1 * height_deksia) * @profil_aristera_1.price.to_f ) / 1000 ) * @numero_aristera_1 
          profil_sum = profil_sum + ( @profil_aristera_1.price * @numero_aristera_1 )
        end
        if ( !@profil_aristera_2.nil? )
          if ( width_gia_vasi_new != 0)
	    		width_n = width_gia_vasi_new
	    	else
	    		width_n = width
	    	end
	    	if ( height_gia_vasi_new != 0)
	    		height_n = height_gia_vasi_new
	    	else
	    		height_n = height
	    	end
	    	width_deksia = @profil_aristera_2.width
	    	height_deksia = height_n
	    	if ( !@epik_rolo.nil? )
	    		height_deksia = height_deksia #+ @epik_rolo.height
	    	end
	    	if ( !@profil_panw_1.nil? && !@epik_rolo.nil? )
	    		height_deksia = height_deksia + (@profil_panw_1.height * @numero_panw_1)
	    	end
	    	if ( !@profil_panw_2.nil? && !@epik_rolo.nil? )
	    		height_deksia = height_deksia + (@profil_panw_2.height * @numero_panw_2)
	    	end
	    	if ( !@profil_panw_3.nil? && !@epik_rolo.nil? )
	    		height_deksia = height_deksia + (@profil_panw_3.height * @numero_panw_3)
	    	end
	      timi_profil_aristera_2 = ( ( (1 * height_deksia) * @profil_aristera_2.price.to_f ) / 1000 ) * @numero_aristera_2
	      tm_p_pa2 = width_deksia
	      tm_u_pa2 = height_deksia
          @price_extra = @price_extra + ( ( (1 * height_deksia) * @profil_aristera_2.price.to_f ) / 1000 ) * @numero_aristera_2
          profil_sum = profil_sum + ( @profil_aristera_2.price * @numero_aristera_2 )
        end
        if ( !@profil_aristera_3.nil? )
          if ( width_gia_vasi_new != 0)
	    		width_n = width_gia_vasi_new
	    	else
	    		width_n = width
	    	end
	    	if ( height_gia_vasi_new != 0)
	    		height_n = height_gia_vasi_new
	    	else
	    		height_n = height
	    	end
	    	width_deksia = @profil_aristera_3.width
	    	height_deksia = height_n
	    	if ( !@epik_rolo.nil? )
	    		height_deksia = height_deksia #+ @epik_rolo.height
	    	end
	    	if ( !@profil_panw_1.nil? && !@epik_rolo.nil? )
	    		height_deksia = height_deksia + (@profil_panw_1.height * @numero_panw_1)
	    	end
	    	if ( !@profil_panw_2.nil? && !@epik_rolo.nil? )
	    		height_deksia = height_deksia + (@profil_panw_2.height * @numero_panw_2)
	    	end
	    	if ( !@profil_panw_3.nil? && !@epik_rolo.nil? )
	    		height_deksia = height_deksia + (@profil_panw_3.height * @numero_panw_3)
	    	end
	      timi_profil_aristera_3 = ( ( (1 * height_deksia) * @profil_aristera_3.price.to_f ) / 1000 ) * @numero_aristera_3
	      tm_p_pa3 = width_deksia
	      tm_u_pa3 = height_deksia
          @price_extra = @price_extra + ( ( (1 * height_deksia) * @profil_aristera_3.price.to_f ) / 1000 ) * @numero_aristera_3
          profil_sum = profil_sum + ( @profil_aristera_3.price * @numero_aristera_3 )
        end

        if ( !@profil_panw_1.nil? )
        	if ( width_gia_vasi_new != 0)
	    		width_n = width_gia_vasi_new
	    	else
	    		width_n = width
	    	end
	    	if ( height_gia_vasi_new != 0)
	    		height_n = height_gia_vasi_new
	    	else
	    		height_n = height
	    	end
	    	width_deksia = width_n
	    	height_deksia = @profil_panw_1.height
	    	if ( !@profil_deksia_1.nil? && @epik_rolo.nil? )
	    		width_deksia = width_deksia + (@profil_deksia_1.height * @numero_deksia_1)
	    	end
	    	if ( !@profil_deksia_2.nil? && @epik_rolo.nil? )
	    		width_deksia = width_deksia + (@profil_deksia_2.height * @numero_deksia_2)
	    	end
	    	if ( !@profil_deksia_3.nil? && @epik_rolo.nil? )
	    		width_deksia = width_deksia + (@profil_deksia_3.height * @numero_deksia_3)
	    	end
	    	if ( !@profil_aristera_1.nil? && @epik_rolo.nil? )
	    		width_deksia = width_deksia + (@profil_aristera_1.height * @numero_aristera_1)
	    	end
	    	if ( !@profil_aristera_2.nil? && @epik_rolo.nil? )
	    		width_deksia = width_deksia + (@profil_aristera_2.height * @numero_aristera_2)
	    	end
	    	if ( !@profil_aristera_3.nil? && @epik_rolo.nil? )
	    		width_deksia = width_deksia + (@profil_aristera_3.height * @numero_aristera_3)
	    	end
          timi_profil_panw_1 = ( ( (width_deksia * 1) * @profil_panw_1.price.to_f ) / 1000 ) * @numero_panw_1
	      tm_p_pp1 = width_deksia
	      tm_u_pp1 = height_deksia
          @price_extra = @price_extra + ( ( (width_deksia * 1) * @profil_panw_1.price.to_f ) / 1000 ) * @numero_panw_1
          profil_sum = profil_sum + ( @profil_panw_1.price * @numero_panw_1 )
        end
        if ( !@profil_panw_2.nil? )
          if ( width_gia_vasi_new != 0)
	    		width_n = width_gia_vasi_new
	    	else
	    		width_n = width
	    	end
	    	if ( height_gia_vasi_new != 0)
	    		height_n = height_gia_vasi_new
	    	else
	    		height_n = height
	    	end
	    	width_deksia = width_n
	    	height_deksia = @profil_panw_2.height
	    	if ( !@profil_deksia_1.nil? && @epik_rolo.nil? )
	    		width_deksia = width_deksia + (@profil_deksia_1.height * @numero_deksia_1)
	    	end
	    	if ( !@profil_deksia_2.nil? && @epik_rolo.nil? )
	    		width_deksia = width_deksia + (@profil_deksia_2.height * @numero_deksia_2)
	    	end
	    	if ( !@profil_deksia_3.nil? && @epik_rolo.nil? )
	    		width_deksia = width_deksia + (@profil_deksia_3.height * @numero_deksia_3)
	    	end
	    	if ( !@profil_aristera_1.nil? && @epik_rolo.nil? )
	    		width_deksia = width_deksia + (@profil_aristera_1.height * @numero_aristera_1)
	    	end
	    	if ( !@profil_aristera_2.nil? && @epik_rolo.nil? )
	    		width_deksia = width_deksia + (@profil_aristera_2.height * @numero_aristera_2)
	    	end
	    	if ( !@profil_aristera_3.nil? && @epik_rolo.nil? )
	    		width_deksia = width_deksia + (@profil_aristera_3.height * @numero_aristera_3)
	    	end
          timi_profil_panw_2 = ( ( (width_deksia * 1) * @profil_panw_2.price.to_f ) / 1000 ) * @numero_panw_2
	      tm_p_pp2 = width_deksia
	      tm_u_pp2 = height_deksia
          @price_extra = @price_extra + ( ( (width_deksia * 1) * @profil_panw_2.price.to_f ) / 1000 ) * @numero_panw_2
          profil_sum = profil_sum + ( @profil_panw_2.price * @numero_panw_2 )
        end
        if ( !@profil_panw_3.nil? )
          if ( width_gia_vasi_new != 0)
	    		width_n = width_gia_vasi_new
	    	else
	    		width_n = width
	    	end
	    	if ( height_gia_vasi_new != 0)
	    		height_n = height_gia_vasi_new
	    	else
	    		height_n = height
	    	end
	    	width_deksia = width_n
	    	height_deksia = @profil_panw_3.height
	    	if ( !@profil_deksia_1.nil? && @epik_rolo.nil? )
	    		width_deksia = width_deksia + (@profil_deksia_1.height * @numero_deksia_1)
	    	end
	    	if ( !@profil_deksia_2.nil? && @epik_rolo.nil? )
	    		width_deksia = width_deksia + (@profil_deksia_2.height * @numero_deksia_2)
	    	end
	    	if ( !@profil_deksia_3.nil? && @epik_rolo.nil? )
	    		width_deksia = width_deksia + (@profil_deksia_3.height * @numero_deksia_3)
	    	end
	    	if ( !@profil_aristera_1.nil? && @epik_rolo.nil? )
	    		width_deksia = width_deksia + (@profil_aristera_1.height * @numero_aristera_1)
	    	end
	    	if ( !@profil_aristera_2.nil? && @epik_rolo.nil? )
	    		width_deksia = width_deksia + (@profil_aristera_2.height * @numero_aristera_2)
	    	end
	    	if ( !@profil_aristera_3.nil? && @epik_rolo.nil? )
	    		width_deksia = width_deksia + (@profil_aristera_3.height * @numero_aristera_3)
	    	end
          timi_profil_panw_3 = ( ( (width_deksia * 1) * @profil_panw_3.price.to_f ) / 1000 ) * @numero_panw_3
	      tm_p_pp3 = width_deksia
	      tm_u_pp3 = height_deksia
          @price_extra = @price_extra + ( ( (width_deksia * 1) * @profil_panw_3.price.to_f ) / 1000 ) * @numero_panw_3
          profil_sum = profil_sum + ( @profil_panw_3.price * @numero_panw_3 )
        end

        if ( !@profil_katw_1.nil? )
          if ( width_gia_vasi_new != 0)
	    		width_n = width_gia_vasi_new
	    	else
	    		width_n = width
	    	end
	    	if ( height_gia_vasi_new != 0)
	    		height_n = height_gia_vasi_new
	    	else
	    		height_n = height
	    	end
	    	width_deksia = width_n
	    	height_deksia = @profil_katw_1.height
	    	if ( !@profil_deksia_1.nil?  )
	    		width_deksia = width_deksia + (@profil_deksia_1.height * @numero_deksia_1)
	    	end
	    	if ( !@profil_deksia_2.nil?  )
	    		width_deksia = width_deksia + (@profil_deksia_2.height * @numero_deksia_2)
	    	end
	    	if ( !@profil_deksia_3.nil? )
	    		width_deksia = width_deksia + (@profil_deksia_3.height * @numero_deksia_3)
	    	end
	    	if ( !@profil_aristera_1.nil?  )
	    		width_deksia = width_deksia + (@profil_aristera_1.height * @numero_aristera_1)
	    	end
	    	if ( !@profil_aristera_2.nil?  )
	    		width_deksia = width_deksia + (@profil_aristera_2.height * @numero_aristera_2)
	    	end
	    	if ( !@profil_aristera_3.nil?  )
	    		width_deksia = width_deksia + (@profil_aristera_3.height * @numero_aristera_3)
	    	end
          timi_profil_katw_1 = ( ( (width_deksia * 1) * @profil_katw_1.price.to_f ) / 1000 )
	      tm_p_pk1 = width_deksia
	      tm_u_pk1 = height_deksia
          @price_extra = @price_extra + ( ( (width_deksia * 1) * @profil_katw_1.price.to_f ) / 1000 )
          profil_sum = profil_sum + ( @profil_katw_1.price * @numero_katw_1 )
        end
        if ( !@profil_katw_2.nil? )
          if ( width_gia_vasi_new != 0)
	    		width_n = width_gia_vasi_new
	    	else
	    		width_n = width
	    	end
	    	if ( height_gia_vasi_new != 0)
	    		height_n = height_gia_vasi_new
	    	else
	    		height_n = height
	    	end
	    	width_deksia = width_n
	    	height_deksia = @profil_katw_2.height
	    	if ( !@profil_deksia_1.nil?  )
	    		width_deksia = width_deksia + (@profil_deksia_1.height * @numero_deksia_1)
	    	end
	    	if ( !@profil_deksia_2.nil?  )
	    		width_deksia = width_deksia + (@profil_deksia_2.height * @numero_deksia_2)
	    	end
	    	if ( !@profil_deksia_3.nil? )
	    		width_deksia = width_deksia + (@profil_deksia_3.height * @numero_deksia_3)
	    	end
	    	if ( !@profil_aristera_1.nil?  )
	    		width_deksia = width_deksia + (@profil_aristera_1.height * @numero_aristera_1)
	    	end
	    	if ( !@profil_aristera_2.nil?  )
	    		width_deksia = width_deksia + (@profil_aristera_2.height * @numero_aristera_2)
	    	end
	    	if ( !@profil_aristera_3.nil?  )
	    		width_deksia = width_deksia + (@profil_aristera_3.height * @numero_aristera_3)
	    	end
          timi_profil_katw_2 = ( ( (width_deksia * 1) * @profil_katw_2.price.to_f ) / 1000 )
	      tm_p_pk2 = width_deksia
	      tm_u_pk2 = height_deksia
          @price_extra = @price_extra + ( ( (width_deksia * 1) * @profil_katw_2.price.to_f ) / 1000 )
          profil_sum = profil_sum + ( @profil_katw_2.price * @numero_katw_2 )
        end
        if ( !@profil_katw_3.nil? )
          if ( width_gia_vasi_new != 0)
	    		width_n = width_gia_vasi_new
	    	else
	    		width_n = width
	    	end
	    	if ( height_gia_vasi_new != 0)
	    		height_n = height_gia_vasi_new
	    	else
	    		height_n = height
	    	end
	    	width_deksia = width_n
	    	height_deksia = @profil_katw_3.height
	    	if ( !@profil_deksia_1.nil?  )
	    		width_deksia = width_deksia + (@profil_deksia_1.height * @numero_deksia_1)
	    	end
	    	if ( !@profil_deksia_2.nil?  )
	    		width_deksia = width_deksia + (@profil_deksia_2.height * @numero_deksia_2)
	    	end
	    	if ( !@profil_deksia_3.nil? )
	    		width_deksia = width_deksia + (@profil_deksia_3.height * @numero_deksia_3)
	    	end
	    	if ( !@profil_aristera_1.nil?  )
	    		width_deksia = width_deksia + (@profil_aristera_1.height * @numero_aristera_1)
	    	end
	    	if ( !@profil_aristera_2.nil?  )
	    		width_deksia = width_deksia + (@profil_aristera_2.height * @numero_aristera_2)
	    	end
	    	if ( !@profil_aristera_3.nil?  )
	    		width_deksia = width_deksia + (@profil_aristera_3.height * @numero_aristera_3)
	    	end
          timi_profil_katw_3 = ( ( (width_deksia * 1) * @profil_katw_3.price.to_f ) / 1000 )
	      tm_p_pk3 = width_deksia
	      tm_u_pk3 = height_deksia
          @price_extra = @price_extra + ( ( (width_deksia * 1) * @profil_katw_3.price.to_f ) / 1000 )
          profil_sum = profil_sum + ( @profil_katw_3.price * @numero_katw_3 )
        end

        if ( !@typos_katw_1.nil? )
          if ( width_gia_vasi_new != 0)
	    		width_n = width_gia_vasi_new
	    	else
	    		width_n = width
	    	end
	    	if ( height_gia_vasi_new != 0)
	    		height_n = height_gia_vasi_new
	    	else
	    		height_n = height
	    	end
	    	width_deksia = width_n
	    	height_deksia = @typos_katw_1.height
	    	if ( !@profil_deksia_1.nil?  )
	    		width_deksia = width_deksia + (@profil_deksia_1.height * @numero_deksia_1)
	    	end
	    	if ( !@profil_deksia_2.nil?  )
	    		width_deksia = width_deksia + (@profil_deksia_2.height * @numero_deksia_2)
	    	end
	    	if ( !@profil_deksia_3.nil? )
	    		width_deksia = width_deksia + (@profil_deksia_3.height * @numero_deksia_3)
	    	end
	    	if ( !@profil_aristera_1.nil?  )
	    		width_deksia = width_deksia + (@profil_aristera_1.height * @numero_aristera_1)
	    	end
	    	if ( !@profil_aristera_2.nil?  )
	    		width_deksia = width_deksia + (@profil_aristera_2.height * @numero_aristera_2)
	    	end
	    	if ( !@profil_aristera_3.nil?  )
	    		width_deksia = width_deksia + (@profil_aristera_3.height * @numero_aristera_3)
	    	end
          timi_typos_1 = ( ( (width_deksia * 1) * @typos_katw_1.price.to_f ) / 1000 )
	      tm_p_t1 = width_deksia
	      tm_u_t1 = 1
          @price_extra = @price_extra + ( ( (width_deksia * 1) * @typos_katw_1.price.to_f ) / 1000 )
          profil_sum = profil_sum + ( @typos_katw_1.price * @numero_typos_1 )
        end
        if ( !@typos_katw_2.nil? )
          @price_extra = @price_extra + ( @typos_katw_2.price * @numero_typos_2 )
          profil_sum = profil_sum + ( @typos_katw_2.price * @numero_typos_2 )
        end
        if ( !@typos_katw_3.nil? )
          @price_extra = @price_extra + ( @typos_katw_3.price * @numero_typos_3 )
          profil_sum = profil_sum + ( @typos_katw_3.price * @numero_typos_3 )
        end

        ### Μεχρι εδω


        ##### ΤΕΛΙΚΗ ΤΙΜΗ ########### Και οι δυο οι τιμες μαζι. Εδω παντα θα ειναι η δευτερη
        if ( @price_new == 0)
          @price_sum = @price + @price_extra
        else
          @price_sum = @price_new + @price_extra	
        end

        ## Εδώ αν το αίτημα είναι html μπορω να αποθηκεύσω στην βάση την παραγγελία.
        if request.format.html?
        	diorthwsi_aukson = 0
            if ( session[:diorthosi] != "0" )
            	koufwma = Order.find(session[:diorthosi])
            	diorthwsi_aukson = koufwma.aukson
                File.delete("#{Rails.root}/public/upload/#{koufwma.canvas}.png")
	            koufwma.destroy
            end
	        ##Eggrafi paraggelias ston pinaka
	        @order = Order.new()
		        if ( @aukson_id.nil? )
		        	@items_apo_idia_paraggelia = Order.where(:paraggelia_id => session[:paraggelia_simple])
		        	counter_an_uparxoun_kai_alla = Order.where(:paraggelia_id => session[:paraggelia_simple]).count
	            	if ( counter_an_uparxoun_kai_alla != 0 )
	            		if ( diorthwsi_aukson != 0 )
	            			@order.aukson = diorthwsi_aukson
	            		else
	            			aukson_temp = @items_apo_idia_paraggelia.order("aukson").last.aukson
	   						@order.aukson = aukson_temp + 1
	   						diorthwsi_aukson = 0
	            		end
	            	else
	            		@order.aukson = 1
	            		diorthwsi_aukson = 0
	            	end
	        	else
	        		@order.aukson = @aukson_id
	        	end
	        	if ( session[:diorthosi] != "0" )
	        		@order.aukson = diorthwsi_aukson
	        	end
		    @order.open_categorie_id = @open_categorie.name
		    @order.material_id = @material.name
		    @order.constructor_id = @constructor.name
		    @order.system_id = @system.name
		    @order.line_id = @line.name
		    @order.leaf_id = @leaf.id
		    @order.main_color_id = @color.name
		    @order.main_color_eksw_id = @color_eksw.name
		    @order.in_out = @mesa_eksw
		    @order.open_type_id = @open_type.name
		    @order.image = @open_type.image # + ".png"
		    #### ΧΡΩΜΑΤΑ
		    if !@color_fulou.nil?
		      @order.leaf_color_id = @color_fulou.name
		    end
		    if !@color_deksia.nil?
			  @order.right_color_id = @color_deksia.name
		      @order.left_color_id = @color_aristera.name
			  @order.up_color_id = @color_panw.name
			  @order.down_color_id = @color_katw.name
		    end
		    #### ΔΙΑΣΤΑΣΕΙΣ
		    @order.width = @width
		    @order.width_new = width_gia_vasi_new
		    if ( !xwrisma1.nil? && xwrisma1 != "0" )
		    	@order.xwrisma1 = xwrisma1
		    	@order.xwrisma2 = xwrisma2
		    end
		    if ( !xwrisma3_1.nil? && xwrisma3_1 != "0" )
		    	@order.xwrisma3_1 = xwrisma3_1
		    	@order.xwrisma3_2 = xwrisma3_2
		    	@order.xwrisma3_3 = xwrisma3_3
		    end
		    if ( !xwrisma_y_1.nil? && xwrisma_y_1 != "0" )
		    	@order.xwrisma_y_1 = xwrisma_y_1
		    	@order.xwrisma_y_2 = xwrisma_y_2
		    end
		    @order.height_new = height_gia_vasi_new
		    @order.height = @height
		    #if !@epik_rolo.nil?
		    #  @order.height_new = @height_new
		    #end
		    #### ΛΑΣΤΙΧΟ
		    if !@lastixa.nil?
		      @order.lastixa = @lastixa
		    end
		    #### EXTRA
		    if !@tzamia0.nil?
		      @order.tzamia0 = @tzamia0.name
		      @order.tzami0_cat = params[:tzami0_cat]
		      @order.tm_p_tzami0 = tm_p_tzami0
		      @order.tm_u_tzami0 = tm_u_tzami0
		      @order.timi_m_tzami0 = @tzamia0.price
		      @order.price_tzamiou0 = view_context.number_with_precision(pr_tz0, :precision => 2)
		    end
		    if !@tzamia.nil?
		      @order.tzamia = @tzamia.name
		      @order.tzami1_cat = params[:tzami1_cat]
		      @order.tm_p_tzami1 = tm_p_tzami1
		      @order.tm_u_tzami1 = tm_u_tzami1
		      @order.timi_m_tzami1 = @tzamia.price
		      @order.price_tzamiou = view_context.number_with_precision(pr_tz, :precision => 2)
		    end
		    if !@tzamia2.nil?
		      @order.tzamia2 = @tzamia2.name
		      @order.tzami2_cat = params[:tzami2_cat]
		      @order.tm_p_tzami2 = tm_p_tzami2
		      @order.tm_u_tzami2 = tm_u_tzami2
		      @order.timi_m_tzami2 = @tzamia2.price
		      @order.price_tzamiou2 = view_context.number_with_precision(pr_tz2, :precision => 2)
		    end
		    if (prostasia != "0")
		      @order.prostasia_name = pro_name
		      @order.prostasia_price = view_context.number_with_precision(pro, :precision => 2)
		      @order.tm_p_prostasia = tm_p_prostasia
		      @order.timi_m_p_prostasia = timi_m_p_prostasia
		    end
		    if !@odoigos.nil?
		    	#if (@up_odoigou.to_f > 0.0)
		    	#	@order.up_odigou = @up_odoigou.to_f
		    	#else
		        #		@order.up_odigou = height_mesa_meta_apo_typo
		    	#end
		    	@order.up_odigou = tm_od * 1000
		    	@order.timi_m_odoigou = timi_m_odoigou
		    	@order.odoigos = @odoigos.name
		    	@order.color_odoigou = @xrwma_odoigou
		    	@order.price_odoigou = pr_odoig
		    end
		    if !@epik_rolo.nil?
		    	if (@pl_rol_ep.to_f > 0.0)
		    		@order.pl_rolou_ep = @pl_rol_ep.to_f
		    	else
		    		@order.pl_rolou_ep = mikos_eksw
		    	end
		    	if (@up_rol_ep.to_f > 0.0)
		    		@order.up_rolou_ep = @up_rol_ep.to_f
		    	else
		    		@order.up_rolou_ep = height#height_mesa_meta_apo_typo
		    	end
		    	if ( !@kinisi_ep.nil? )
		    		@order.kinisi_deksia_aristera = @kinisi_ep
		    	end
		    	if ( !@klap_ep.nil? )
		    		@order.klap = @klap_ep
		    	end
		      @order.rolo = @epik_rolo.name
		      @order.color_rolou = @xrwma_epikathimenou
		      @order.timi_m_epik = timi_m_epik
		      @order.price_rolou = pr_epik
		    end
		    if !@ekso_rolo.nil?
		    	if (@pl_rol_ek.to_f > 0.0)
		    		@order.pl_rolou_ek = @pl_rol_ek.to_f
		    	else
		    		@order.pl_rolou_ek = mikos_eksw
		    	end
		    	if (@up_rol_ek.to_f > 0.0)
		    		@order.up_rolou_ek = @up_rol_ek.to_f
		    	else
		    		@order.up_rolou_ek = height#height_mesa_meta_apo_typo
		    	end
		    	if ( !@kinisi_ek.nil? )
		    		@order.kinisi_deksia_aristera = @kinisi_ek
		    	end
		    	if ( !@deroll.nil? )
		    		@order.deroll = @deroll
		    	end
		      @order.rolo = @ekso_rolo.name
		      @order.color_rolou = @xrwma_eksoterikou
		      @order.timi_m_ekso = timi_m_ekso
		      @order.price_rolou = pr_ekso
		     end
		    if !@persida.nil?
		    	if (@pl_persidas.to_f > 0.0)
		    		@order.pl_persidas = @pl_persidas.to_f
		    	else
		    		@order.pl_persidas = mikos_eksw
		    	end
		    	if (@up_persidas.to_f > 0.0)
		    		@order.up_persidas = @up_persidas.to_f
		    	else
		    		@order.up_persidas = height#height_mesa_meta_apo_typo
		    	end
		    	@order.persida = @persida.name
		    	@order.color_persidas = @xrwma_persidas
		    	@order.timi_m_persidas = timi_m_persidas
		    	@order.price_persidas = pr_per
		    end
		    ### Nea profil
		    if !@profil_deksia_1.nil?
		    	@order.profil_deksia_1 = @profil_deksia_1.name
		    	@order.pd1_code = @profil_deksia_1.code
		    	@order.color_profil_d = @color_profil_deksia.name
		    	@order.profil_deksia_arithmos_1 = @numero_deksia_1
		    	@order.tm_p_pd1 = tm_p_pd1
		    	@order.tm_u_pd1 = tm_u_pd1
		    	@order.timi_profil_deksia_1 = timi_profil_deksia_1
		    	@order.timi_m_p_d_1 = @profil_deksia_1.price
		    end
		    if !@profil_deksia_2.nil?
		    	@order.profil_deksia_2 = @profil_deksia_2.name
		    	@order.pd2_code = @profil_deksia_2.code
		    	@order.color_profil_d = @color_profil_deksia.name
		    	@order.profil_deksia_arithmos_2 = @numero_deksia_2
		    	@order.tm_p_pd2 = tm_p_pd2
		    	@order.tm_u_pd2 = tm_u_pd2
		    	@order.timi_profil_deksia_2 = timi_profil_deksia_2
		    	@order.timi_m_p_d_2 = @profil_deksia_2.price
		    end
		    if !@profil_deksia_3.nil?
		    	@order.profil_deksia_3 = @profil_deksia_3.name
		    	@order.pd3_code = @profil_deksia_3.code
		    	@order.color_profil_d = @color_profil_deksia.name
		    	@order.profil_deksia_arithmos_3 = @numero_deksia_3
		    	@order.tm_p_pd3 = tm_p_pd3
		    	@order.tm_u_pd3 = tm_u_pd3
		    	@order.timi_deksia_profil_3 = timi_profil_deksia_3
		    	@order.timi_m_p_d_3 = @profil_deksia_3.price
		    end

		    if !@profil_aristera_1.nil?
		    	@order.profil_aristera_1 = @profil_aristera_1.name
		    	@order.pa1_code = @profil_aristera_1.code
		    	@order.color_profil_a = @color_profil_aristera.name
		    	@order.profil_aristera_arithmos_1 = @numero_aristera_1
		    	@order.tm_p_pa1 = tm_p_pa1
		    	@order.tm_u_pa1 = tm_u_pa1
		    	@order.timi_profil_aristera_1 = timi_profil_aristera_1
		    	@order.timi_m_p_a_1 = @profil_aristera_1.price
		    end
		    if !@profil_aristera_2.nil?
		    	@order.profil_aristera_2 = @profil_aristera_2.name
		    	@order.pa2_code = @profil_aristera_2.code
		    	@order.color_profil_a = @color_profil_aristera.name
		    	@order.profil_aristera_arithmos_2 = @numero_aristera_2
		    	@order.tm_p_pa2 = tm_p_pa2
		    	@order.tm_u_pa2 = tm_u_pa2
		    	@order.timi_profil_aristera_2 = timi_profil_aristera_2
		    	@order.timi_m_p_a_2 = @profil_aristera_2.price
		    end
		    if !@profil_aristera_3.nil?
		    	@order.profil_aristera_3 = @profil_aristera_3.name
		    	@order.pa3_code = @profil_aristera_3.code
		    	@order.color_profil_a = @color_profil_aristera.name
		    	@order.profil_aristera_arithmos_3 = @numero_aristera_3
		    	@order.tm_p_pa3 = tm_p_pa3
		    	@order.tm_u_pa3 = tm_u_pa3
		    	@order.timi_profil_aristera_3 = timi_profil_aristera_3
		    	@order.timi_m_p_a_3 = @profil_aristera_3.price
		    end

		    if !@profil_panw_1.nil?
		    	@order.profil_panw_1 = @profil_panw_1.name
		    	@order.pp1_code = @profil_panw_1.code
		    	@order.color_profil_p = @color_profil_panw.name
		    	@order.profil_panw_arithmos_1 = @numero_panw_1
		    	@order.tm_p_pp1 = tm_p_pp1
		    	@order.tm_u_pp1 = tm_u_pp1
		    	@order.timi_profil_panw_1 = timi_profil_panw_1
		    	@order.timi_m_p_p_1 = @profil_panw_1.price
		    end
		    if !@profil_panw_2.nil?
		    	@order.profil_panw_2 = @profil_panw_2.name
		    	@order.pp2_code = @profil_panw_2.code
		    	@order.color_profil_p = @color_profil_panw.name
		    	@order.profil_panw_arithmos_2 = @numero_panw_2
		    	@order.tm_p_pp2 = tm_p_pp2
		    	@order.tm_u_pp2 = tm_u_pp2
		    	@order.timi_profil_panw_2 = timi_profil_panw_2
		    	@order.timi_m_p_p_2 = @profil_panw_2.price
		    end
		    if !@profil_panw_3.nil?
		    	@order.profil_panw_3 = @profil_panw_3.name
		    	@order.pp3_code = @profil_panw_3.code
		    	@order.color_profil_p = @color_profil_panw.name
		    	@order.profil_panw_arithmos_3 = @numero_panw_3
		    	@order.tm_p_pp3 = tm_p_pp3
		    	@order.tm_u_pp3 = tm_u_pp3
		    	@order.timi_profil_panw_3 = timi_profil_panw_3
		    	@order.timi_m_p_p_3 = @profil_panw_3.price
		    end

		    if !@profil_katw_1.nil?
		    	@order.profil_katw_1 = @profil_katw_1.name
		    	@order.pk1_code = @profil_katw_1.code
		    	@order.color_profil_k = @color_profil_katw.name
		    	@order.profil_katw_arithmos_1 = @numero_katw_1
		    	@order.tm_p_pk1 = tm_p_pk1
		    	@order.tm_u_pk1 = tm_u_pk1
		    	@order.timi_profil_katw_1 = timi_profil_katw_1
		    	@order.timi_m_p_k_1 = @profil_katw_1.price
		    end
		    if !@profil_katw_2.nil?
		    	@order.profil_katw_2 = @profil_katw_2.name
		    	@order.pk2_code = @profil_katw_2.code
		    	@order.color_profil_k = @color_profil_katw.name
		    	@order.profil_katw_arithmos_2 = @numero_katw_2
		    	@order.tm_p_pk2 = tm_p_pk2
		    	@order.tm_u_pk2 = tm_u_pk2
		    	@order.timi_profil_katw_2 = timi_profil_katw_2
		    	@order.timi_m_p_k_2 = @profil_katw_2.price
		    end
		    if !@profil_katw_3.nil?
		    	@order.profil_katw_3 = @profil_katw_3.name
		    	@order.pk3_code = @profil_katw_3.code
		    	@order.color_profil_k = @color_profil_katw.name
		    	@order.profil_katw_arithmos_3 = @numero_katw_3
		    	@order.tm_p_pk3 = tm_p_pk3
		    	@order.tm_u_pk3 = tm_u_pk3
		    	@order.timi_profil_katw_3 = timi_profil_katw_3
		    	@order.timi_m_p_k_3 = @profil_katw_3.price
		    end

		    if !@typos_katw_1.nil?
		    	@order.typos_katw_1 = @typos_katw_1.name
		    	@order.typos_code = @typos_katw_1.code
		    	@order.color_profil_k = @color_profil_katw.name
		    	@order.typos_katw_arithmos_1 = @numero_typos_1
		    	@order.tm_p_t1 = tm_p_t1
		    	@order.tm_u_t1 = tm_u_t1
		    	@order.timi_typos_katw_1 = timi_typos_1
		    	@order.timi_m_t_1 = @typos_katw_1.price
		    end
		    if !@typos_katw_2.nil?
		    	@order.typos_katw_2 = @typos_katw_2.name
		    	@order.typos_code = @typos_katw_2.code
		    	@order.color_profil_k = @color_profil_katw.name
		    	@order.typos_katw_arithmos_2 = @numero_typos_2
		    	@order.timi_typos_katw_2 = ( @typos_katw_2.price * @numero_typos_2 )
		    end
		    if !@typos_katw_3.nil?
		    	@order.typos_katw_3 = @typos_katw_3.name
		    	@order.typos_code = @typos_katw_3.code
		    	@order.color_profil_k = @color_profil_katw.name
		    	@order.typos_katw_arithmos_3 = @numero_typos_3
		    	@order.timi_typos_katw_3 = ( @typos_katw_3.price * @numero_typos_3 )
		    end

		    ####Mexri edw
		   

		    #### ΤΙΜΕΣ
		    #### price, price_update, price_extra, price_sum, price_new
		    @order.price = @price
		    @order.super_apli_timi = @timi_mono_aspro_super_apli
		    @order.price_extra = @price_extra
		    @order.price_new = @price_new
		    @order.price_sum = @price_sum
		    @order.price_update = @price_sum
		    @order.posotoita = @posotita
		    #### USER
		    if current_user.admin == 1
		      user = PseUser.where(:id => session[:pseUserId]).first
		        if ( user )
			      @order.user_id = user.id
			      @order.pse = 1
			    else
			      @order.paraggelia_id = session[:paraggelia_simple]
			      paraggelia = Paraggelia.where(:id => session[:paraggelia_simple]).first
			      #paraggelia.updated_at = DateTime.now
			      paraggelia.save
		          @order.user_id = session[:dealer_id]
		          @order.pse = 0
		        end
		    else
		      @order.paraggelia_id = session[:paraggelia_simple]
		      paraggelia = Paraggelia.where(:id => session[:paraggelia_simple]).first
			  #paraggelia.updated_at = DateTime.now
			  paraggelia.sum = paraggelia.sum + @price_sum
			  paraggelia.meta_pososto = paraggelia.sum
			  paraggelia.save
		      @order.user_id = current_user.id
		      @order.pse = 0
		      session.delete(:paraggelia_simple)
		    end
		    #last = Order.order("created_at").last
		    #id_canvas = last.id + 1
		    @order.canvas = session[:id_canvas]
		    @order.save 
		    #@order.canvas = @order.id
		end

        ## Αλλάζω τα ονόματα των μεταβλητών για να τα δέχετε καλήτερα η javascript.
        if !@epik_rolo.nil?
        	epik_rolo_name = @epik_rolo.name
        	epik_rolo_price = pr_epik
        	epik_rolo_color = @xrwma_epikathimenou
        else
        	epik_rolo_name = ""
        	epik_rolo_price = 0
        	epik_rolo_color = ""
        end
        if !@ekso_rolo.nil?
        	ekso_rolo_name = @ekso_rolo.name
        	ekso_rolo_price = pr_ekso
        	ekso_rolo_color = @xrwma_eksoterikou
        else
        	ekso_rolo_name = ""
        	ekso_rolo_price = 0
        	ekso_rolo_color = ""
        end
        if !@persida.nil?
        	persida_name = @persida.name
        	persida_price = pr_per
        	col_persidas = @xrwma_persidas
        else
        	persida_name = ""
        	persida_price = 0
        	col_persidas = ""
        end
        if (@epiva_la != "0")
        	lastixo_name = @lastixa
        	lastixo_price = @epiva_la
        else
        	lastixo_name = ""
        	lastixo_price = 0
        end
        if !@tzamia0.nil?
        	tzami0_name = @tzamia0.name
        	tzami0_timi = pr_tz0
        else
        	tzami0_name = ""
        	tzami0_timi = 0
        end
        if !@tzamia.nil?
        	tzami_name = @tzamia.name
        	tzami_timi = pr_tz
        else
        	tzami_name = ""
        	tzami_timi = 0
        end
        if !@tzamia2.nil?
        	tzami2_name = @tzamia2.name
        	tzami2_timi = pr_tz2
        else
        	tzami2_name = ""
        	tzami2_timi = 0
        end
        if (prostasia != "0")
        	prostasia_name = pro_name
        	prostasia_timi = pro
        else
        	prostasia_name = ""
        	prostasia_timi = 0
        end
        if !@odoigos.nil?
        	odoigos_name = @odoigos.name
        	odoigos_timi = pr_odoig
        	col_odoigou = @xrwma_odoigou
        else
        	odoigos_name = ""
        	odoigos_timi = 0
        	col_odoigou = ""
        end
        profil_price = 0
        profil_posotita = 0
        col_katw = ""
        col_panw = ""
        col_deksia = ""
        col_aristera = ""
        if !@profil_deksia_1.nil? 
        	profil_name_deksia_1 = @profil_deksia_1.name
        	profil_deksia_1_code = @profil_deksia_1.code
        	profil_price_deksia_1 = timi_profil_deksia_1
        	profil_posotita_deksia_1  = @numero_deksia_1
        	col_deksia = @color_profil_deksia.name
        else
        	profil_name_deksia_1 = ""
        	profil_price_deksia_1 = 0
        	profil_posotita_deksia_1 = 0
        end
        if !@profil_deksia_2.nil? 
        	profil_name_deksia_2 = @profil_deksia_2.name
        	profil_deksia_2_code = @profil_deksia_2.code
        	profil_price_deksia_2 = timi_profil_deksia_2
        	profil_posotita_deksia_2 =  @numero_deksia_2
        	col_deksia = @color_profil_deksia.name
        else
        	profil_name_deksia_2 = ""
        	profil_price_deksia_2 = 0
        	profil_posotita_deksia_2 = 0
        end
        if !@profil_deksia_3.nil? 
        	profil_name_deksia_3 = @profil_deksia_3.name
        	profil_deksia_3_code = @profil_deksia_3.code
        	profil_price_deksia_3 = timi_profil_deksia_3
        	profil_posotita_deksia_3 =  @numero_deksia_3
        	col_deksia = @color_profil_deksia.name
        else
        	profil_name_deksia_3 = ""
        	profil_price_deksia_3 = 0
        	profil_posotita_deksia_3 = 0
        end

        if !@profil_aristera_1.nil? 
        	profil_name_aristera_1 = @profil_aristera_1.name
        	profil_aristera_1_code = @profil_aristera_1.code
        	profil_price_aristera_1 = timi_profil_aristera_1
        	profil_posotita_aristera_1  = @numero_aristera_1
        	col_aristera = @color_profil_aristera.name
        else
        	profil_name_aristera_1 = ""
        	profil_price_aristera_1 = 0
        	profil_posotita_aristera_1 = 0
        end
        if !@profil_aristera_2.nil? 
        	profil_name_aristera_2 = @profil_aristera_2.name
        	profil_aristera_2_code = @profil_aristera_2.code
        	profil_price_aristera_2 = timi_profil_aristera_2
        	profil_posotita_aristera_2 =  @numero_aristera_2
        	col_aristera = @color_profil_aristera.name
        else
        	profil_name_aristera_2 = ""
        	profil_price_aristera_2 = 0
        	profil_posotita_aristera_2 = 0
        end
        if !@profil_aristera_3.nil? 
        	profil_name_aristera_3 = @profil_aristera_3.name
        	profil_aristera_3_code = @profil_aristera_3.code
        	profil_price_aristera_3 = timi_profil_aristera_3
        	profil_posotita_aristera_3 =  @numero_aristera_3
        	col_aristera = @color_profil_aristera.name
        else
        	profil_name_aristera_3 = ""
        	profil_price_aristera_3 = 0
        	profil_posotita_aristera_3 = 0
        end
        if !@profil_panw_1.nil? 
        	profil_name_panw_1 = @profil_panw_1.name
        	profil_panw_1_code = @profil_panw_1.code
        	profil_price_panw_1 = timi_profil_panw_1
        	profil_posotita_panw_1  = @numero_panw_1
        	col_panw = @color_profil_panw.name
        else
        	profil_name_panw_1 = ""
        	profil_price_panw_1 = 0
        	profil_posotita_panw_1 = 0
        end
        if !@profil_panw_2.nil? 
        	profil_name_panw_2 = @profil_panw_2.name
        	profil_panw_2_code = @profil_panw_2.code
        	profil_price_panw_2 = timi_profil_panw_2
        	profil_posotita_panw_2 =  @numero_panw_2
        	col_panw = @color_profil_panw.name
        else
        	profil_name_panw_2 = ""
        	profil_price_panw_2 = 0
        	profil_posotita_panw_2 = 0
        end
        if !@profil_panw_3.nil? 
        	profil_name_panw_3 = @profil_panw_3.name
        	profil_panw_3_code = @profil_panw_3.code
        	profil_price_panw_3 = timi_profil_panw_3
        	profil_posotita_panw_3 =  @numero_panw_3
        	col_panw = @color_profil_panw.name
        else
        	profil_name_panw_3 = ""
        	profil_price_panw_3 = 0
        	profil_posotita_panw_3 = 0
        end
        if !@profil_katw_1.nil? 
        	profil_name_katw_1 = @profil_katw_1.name
        	profil_katw_1_code = @profil_katw_1.code
        	profil_price_katw_1 = timi_profil_katw_1
        	profil_posotita_katw_1  = @numero_katw_1
        	col_katw = @color_profil_katw.name
        else
        	profil_name_katw_1 = ""
        	profil_price_katw_1 = 0
        	profil_posotita_katw_1 = 0
        end
        if !@profil_katw_2.nil? 
        	profil_name_katw_2 = @profil_katw_2.name
        	profil_katw_2_code = @profil_katw_2.code
        	profil_price_katw_2 = timi_profil_katw_2
        	profil_posotita_katw_2 =  @numero_katw_2
        	col_katw = @color_profil_katw.name
        else
        	profil_name_katw_2 = ""
        	profil_price_katw_2 = 0
        	profil_posotita_katw_2 = 0
        end
        if !@profil_katw_3.nil? 
        	profil_name_katw_3 = @profil_katw_3.name
        	profil_katw_3_code = @profil_katw_3.code
        	profil_price_katw_3 = timi_profil_katw_3
        	profil_posotita_katw_3 =  @numero_katw_3
        	col_katw = @color_profil_katw.name
        else
        	profil_name_katw_3 = ""
        	profil_price_katw_3 = 0
        	profil_posotita_katw_3 = 0
        end
        if !@typos_katw_1.nil? 
        	typos_name_katw_1 = @typos_katw_1.name
        	typos_name_katw_1_code = @typos_katw_1.code
        	typos_price_katw_1 = timi_typos_1
        	typos_posotita_katw_1  = @numero_typos_1
        	col_katw = @color_profil_katw.name
        else
        	typos_name_katw_1 = ""
        	typos_price_katw_1 = 0
        	typos_posotita_katw_1 = 0
        end
        if !@typos_katw_2.nil? 
        	typos_name_katw_2 = @typos_katw_2.name
        	typos_name_katw_2_code = @typos_katw_2.code
        	typos_price_katw_2 = (@typos_katw_2.price * @numero_typos_2)
        	typos_posotita_katw_2 =  @numero_typos_2
        	col_katw = @color_profil_katw.name
        else
        	typos_name_katw_2 = ""
        	typos_price_katw_2 = 0
        	typos_posotita_katw_2 = 0
        end
        if !@typos_katw_3.nil? 
        	typos_name_katw_3 = @typos_katw_3.name
        	typos_name_katw_3_code = @typos_katw_3.code
        	typos_price_katw_3 = timi_typos_1
        	typos_posotita_katw_3 =  @numero_typos_3
        	col_katw = @color_profil_katw.name
        else
        	typos_name_katw_3 = ""
        	typos_price_katw_3 = 0
        	typos_posotita_katw_3 = 0
        end
        
        if  ( @profil_deksia.nil? && @profil_aristera.nil? && @profil_panw.nil? && @profil_katw.nil? )
        	profil_name = ""
        	profil_price = 0
        	profil_posotita = 0
        end
        		
        		
        	

	    respond_to do |format|
	      format.html { if current_user.admin == 1
		                  user = PseUser.where(:id => session[:pseUserId]).first
		                  if ( user )
		                  	redirect_to data_base_in_out_dashboard_path(:id => session[:pseUserId]) 
						  else
					        redirect_to(data_base_in_out_dashboard_path) 
					      end
					    else
					        redirect_to etic_simple_pse_user_card_path(:id => @order.paraggelia_id)
					    end 
	      	           }
          format.json { render json: {:arxiki_timi => @price,
          							  :super_apli_timi => @timi_mono_aspro_super_apli,
          							  :ep_mesa_gia_pinaka => ep_mesa_gia_pinaka,
          							  :ep_eksw_gia_pinaka => ep_eksw_gia_pinaka,
          							  :ep_mesa_p => ep_mesa,
          							  :ep_eksw_p => ep_eksw,
          							  :tm_tz_0 => tm_tz_0,
          							  :tm_tz_1 => tm_tz_1,
          							  :tm_tz_2 => tm_tz_2,
          							  :tm_od => tm_od,
          							  :tm_per => tm_per,
          							  :tm_ep => tm_ep,
          							  :tm_ek => tm_ek,
          							  :tm_u_pd1 => tm_u_pd1,
          							  :tm_u_pd2 => tm_u_pd2,
          							  :tm_u_pd3 => tm_u_pd3,
          							  :tm_u_pa1 => tm_u_pa1,
          							  :tm_u_pa2 => tm_u_pa2,
          							  :tm_u_pa3 => tm_u_pa3,
          							  :tm_p_pp1 => tm_p_pp1,
          							  :tm_p_pp2 => tm_p_pp2,
          							  :tm_p_pp3 => tm_p_pp3,
          							  :tm_p_pk1 => tm_p_pk1,
          							  :tm_p_pk2 => tm_p_pk2,
          							  :tm_p_pk3 => tm_p_pk3,
          							  :tm_p_t1 => tm_p_t1,
                                      :epikathimeno => epik_rolo_name,
                                      :color_epikathimenou => epik_rolo_color,
                                      :timi_epikathimenou => epik_rolo_price,
                                      :eksoteriko => ekso_rolo_name,
                                      :color_eksoterikou => ekso_rolo_color,
                                      :ekso_rolo_price => ekso_rolo_price,
                                      :pl_rol_ep => @pl_rol_ep,
                                      :up_rol_ep => @up_rol_ep,
                                      :pl_rol_ek => @pl_rol_ek,
                                      :up_rol_ek => @up_rol_ek,
                                      :pl_persidas => @pl_persidas,
                                      :up_persidas => @up_persidas,
                                      :up_odoigou => @up_odoigou,
                                      :persida_name => persida_name,
                                      :col_persidas => col_persidas,
                                      :persida_price => persida_price, 
                                      :nea_timi => @price_new,
          	                          :teliki_timi => @price_sum,
          	                          :prostasia_name => prostasia_name,
          	                          :prostasia_timi => prostasia_timi,
          	                          :lastixo => lastixo_name,
          	                          :lastixo_price => lastixo_price, 
          	                          :tzami0 => tzami0_name,
          	                          :tzami0_timi => tzami0_timi,
          	                          :tzami => tzami_name,
          	                          :tzami_timi => tzami_timi,
          	                          :tzami2 => tzami2_name,
          	                          :tzami2_timi => tzami2_timi,
          	                          :profil_name_deksia_1 => profil_name_deksia_1,
          	                          :profil_price_deksia_1 => profil_price_deksia_1,
          	                          :profil_posotita_deksia_1 => profil_posotita_deksia_1,
          	                          :profil_name_deksia_2 => profil_name_deksia_2,
          	                          :profil_price_deksia_2 => profil_price_deksia_2,
          	                          :profil_posotita_deksia_2 => profil_posotita_deksia_2,
          	                          :profil_name_deksia_3 => profil_name_deksia_3,
          	                          :profil_price_deksia_3 => profil_price_deksia_3,
          	                          :profil_posotita_deksia_3 => profil_posotita_deksia_3,
          	                          :profil_name_aristera_1 => profil_name_aristera_1,
          	                          :profil_price_aristera_1 => profil_price_aristera_1,
          	                          :profil_posotita_aristera_1 => profil_posotita_aristera_1,
          	                          :profil_name_aristera_2 => profil_name_aristera_2,
          	                          :profil_price_aristera_2 => profil_price_aristera_2,
          	                          :profil_posotita_aristera_2 => profil_posotita_aristera_2,
          	                          :profil_name_aristera_3 => profil_name_aristera_3,
          	                          :profil_price_aristera_3 => profil_price_aristera_3,
          	                          :profil_posotita_aristera_3 => profil_posotita_aristera_3,
          	                          :profil_name_panw_1 => profil_name_panw_1,
          	                          :profil_price_panw_1 => profil_price_panw_1,
          	                          :profil_posotita_panw_1 => profil_posotita_panw_1,
          	                          :profil_name_panw_2 => profil_name_panw_2,
          	                          :profil_price_panw_2 => profil_price_panw_2,
          	                          :profil_posotita_panw_2 => profil_posotita_panw_2,
          	                          :profil_name_panw_3 => profil_name_panw_3,
          	                          :profil_price_panw_3 => profil_price_panw_3,
          	                          :profil_posotita_panw_3 => profil_posotita_panw_3,
          	                          :profil_name_katw_1 => profil_name_katw_1,
          	                          :profil_price_katw_1 => profil_price_katw_1,
          	                          :profil_posotita_katw_1 => profil_posotita_katw_1,
          	                          :profil_name_katw_2 => profil_name_katw_2,
          	                          :profil_price_katw_2 => profil_price_katw_2,
          	                          :profil_posotita_katw_2 => profil_posotita_katw_2,
          	                          :profil_name_katw_3 => profil_name_katw_3,
          	                          :profil_price_katw_3 => profil_price_katw_3,
          	                          :profil_posotita_katw_3 => profil_posotita_katw_3,
          	                          :typos_name_katw_1 => typos_name_katw_1,
          	                          :typos_name_katw_1_code => typos_name_katw_1_code,
          	                          :typos_price_katw_1 => typos_price_katw_1,
          	                          :typos_posotita_katw_1 => typos_posotita_katw_1,
          	                          :typos_name_katw_2 => typos_name_katw_2,
          	                          :typos_name_katw_2_code => typos_name_katw_2_code,
          	                          :typos_price_katw_2 => typos_price_katw_2,
          	                          :typos_posotita_katw_2 => typos_posotita_katw_2,
          	                          :typos_name_katw_3 => typos_name_katw_3,
          	                          :typos_name_katw_3_code => typos_name_katw_3_code,
          	                          :typos_price_katw_3 => typos_price_katw_3,
          	                          :typos_posotita_katw_3 => typos_posotita_katw_3,
          	                          :profil_name_deksia_1_code => profil_deksia_1_code,
          	                          :profil_name_deksia_2_code => profil_deksia_2_code,
          	                          :profil_name_deksia_3_code => profil_deksia_3_code,
          	                          :profil_name_aristera_1_code =>  profil_aristera_1_code,
          	                          :profil_name_aristera_2_code =>  profil_aristera_2_code,
          	                          :profil_name_aristera_3_code =>  profil_aristera_3_code,
          	                          :profil_name_panw_1_code => profil_panw_1_code,
          	                          :profil_name_panw_2_code => profil_panw_2_code,
          	                          :profil_name_panw_3_code => profil_panw_3_code,
          	                          :profil_name_katw_1_code => profil_katw_1_code,
          	                          :profil_name_katw_2_code => profil_katw_2_code,
          	                          :profil_name_katw_3_code => profil_katw_3_code,
          	                          :odoigos_name => odoigos_name,
          	                          :color_odoigou => col_odoigou,
          	                          :odoigos_timi => odoigos_timi,
          	                          :color_profil_katw => col_katw,
          	                          :color_profil_deksia => col_deksia,
          	                          :color_profil_aristera => col_aristera,
          	                          :color_profil_panw => col_panw,
          	                          :height_mesa_meta_apo_typo => height_mesa_meta_apo_typo,
          	                          :odoigos_val => odoigos_val,
          	                          :mikos_eksw => mikos_eksw,
          	                          :epik_val_height => epik_val_height,
          	                          :epik_val_width => epik_val_width,
          	                          :ekso_val_width => ekso_val_width,
          	                          :ekso_val_height => ekso_val_height,
          	                          :persida_val_width => persida_val_width,
          	                          :persida_val_height => persida_val_height } }
        end
	end

	def save_image
		last = Order.order("created_at").last
		if ( last.blank? )
			session[:id_canvas] = 1
		else
			session[:id_canvas] = last.id + 1
		end
		File.open("#{Rails.root}/public/upload/#{session[:id_canvas]}.png", 'wb') do |f|
          f.write(params[:image].read)
        end

			@ok = true
			respond_to do |format|
	          format.json { render json: @ok}
	        end
		
	end

    ## Κάρτα απλού user. To @user_id το θέλω για το pdf. 
	def card 
      @items = Order.where(:user_id => current_user.id)
      @number = @items.count
      @sunolo = 0;
      @items.each do |i| #Γινεται και αυτοματα με το update γιατι ανανεονετε η σελιδα!!
        @sunolo = @sunolo + i.price_sum
      end
      @user_id = current_user.id
	end

    ## Περνάω ότι θέλω στο view του pdf. pdf.pdf.prawn. Pdf μονο για απλούς users.
	def pdf
		@user = User.where(:id => params[:id]).first
		@items = Order.where(:user_id => @user.id)
		@sunolo = 0;
        @items.each do |i| #Γινεται και αυτοματα με το update γιατι ανανεονετε η σελιδα!!
          @sunolo = @sunolo + i.price_sum
        end
        @user = User.where(:id => params[:id]).first
        @name = @user.name
        @surname = @user.epitheto
        @company = @user.company
        @address = @user.address1
        @phone = @user.phone
        @email = @user.email
		#redirect_to etic_home_path
	end

    ## Εξάγω την παραγγελία σε διάφωρα αρχεία. csv, xls, xml.
	def export
		@items = Order.where(:user_id => current_user.id)
		respond_to do |format|
          format.csv { filename = "SunGate-#{Time.now.strftime("Date:%d-%m-%Y ---Time:%H:%M:%S")}.csv"
                       send_data @items.to_csv, :filename => filename} ##render text: @items.to_csv
          format.xls { render text: @items.to_csv(col_sep: "\t") }
          format.xml { render xml: @items.to_xml, :only => [:id, :height, :width] }
        end 
	end

    require 'csv'
	##import απο το csv του wolf-sungate
	def import_terms
		#imp = CSV.read('#{Rails.root}/public/sungate_csv/terms-of-payments.csv', headers:true)
		termsss = CSV.foreach("#{Rails.root}/public/sungate_csv/terms-of-payments.csv", col_sep: ';', headers:true) do |row|
			term = Termsop.new
		    term.num = row['Id']
		    term.text = row['Text']
		    term.save
		end 
		redirect_to etic_user_diax_path
	end

	def import_sungate
		CSV.foreach("#{Rails.root}/public/sungate_csv/customers.csv", col_sep: ';', encoding: 'iso-8859-1') do |row|  ##, encoding: 'iso-8859-1'
			# Εξεταζω αν η σειρα ειναι DEALER.
			# Παίρνω τον αριθμό του για να τον συνδέσω με τον πελάτι του. ( Το χρειαζομαι μετα αν εχω νέους πελάτες στο sungate )
			if ( row[0] == "DEALER")
				session[:dealer_num] = row[1]
				dealer = User.where(:sungate_code => session[:dealer_num]).first
				if (  !dealer.nil? )
					# Απλα παίρνω τον κωδικο του απο csv.
				else
					# Αλλιώς τον δημιουργώ στην βάση και παίρνω τον κωδικό του απο csv.
					new_dealer = User.new
					new_dealer.sungate_code = row[1]
					new_dealer.save
				end
			end
			if ( row[0] == "CUSTOMER" )
				customer_num = row[2]
				customer = SimpleUserPse.where(:sungate_num => customer_num).first
				if ( !customer.nil? )
					# Δημιουργω την παραγγελια γι'αυτόν τον πελάτη.
				else
					# Αλλιώς τον δημιουργώ στην βάση και μετά κάνω την παραγγελία.
					new_customer = SimpleUserPse.new
					new_customer.dealer_num = session[:dealer_num]
					new_customer.sungate_num = row[2]
					new_customer.mr = row[3]
					new_customer.name = row[4]
					new_customer.eponimo = row[5]
					new_customer.address = row[6]
					new_customer.city = row[7]
					new_customer.postal_code = row[8]
					new_customer.country_code = row[9]
					new_customer.phone = row[10]
					new_customer.mobile = row[11]
					new_customer.email = row[12]
					new_customer.fax = row[13]
	                new_customer.save
				end
				
			end
		end
		redirect_to etic_user_diax_path
	end

    ## Διαγράφω το επιλεγμένο κούφωμα. 
	def destroy
	  @item = Order.where(:id => params[:id]).first
	  @paraggelia = Paraggelia.where(:id => params[:par_id]).first
	  @paraggelia.sum = (@paraggelia.sum - @item.price_sum)
	  @paraggelia.save
      File.delete("#{Rails.root}/public/upload/#{@item.canvas}.png")
	  @item.destroy
	  #Kanw sort ta kougwmata alla den to theloume
	  #@items_apo_idia_paraggelia = Order.where(:paraggelia_id => params[:par_id])
      #counter_an_uparxoun_kai_alla = Order.where(:paraggelia_id => params[:par_id]).count
      #if ( counter_an_uparxoun_kai_alla != 0 )
     # 	aukson_tem_destroy = 0
     # 	@items_apo_idia_paraggelia.order("aukson").each do |item| 
     # 		aukson_tem_destroy = aukson_tem_destroy + 1
     # 		item.aukson = aukson_tem_destroy
     # 		item.save
     #   end 
     # end
	  if current_user.admin == 1
        redirect_to etic_etic_card_path
      else
      	redirect_to etic_simple_pse_user_card_path(:id => params[:par_id])
      end
    end

    ## Διαγράφω όλη την παραγγελία.
    def diagrafi
      @item = Order.where(:user_id => current_user.id)
      @item.each do |i|
        i.destroy
      end
      redirect_to etic_home_path
    end

    ## Κάνω update τον αριθμό του κουφώματος.
    def update
      @update = Order.where(:id => params[:id], :user_id => current_user.id).first # Οταν εχω δυο ιδια προιοντα με ιδιο artikel εχω λαθος γιατι ανανεωνει μονο το ενα!!! Θέλω έλεγχο
      @update_price = @update.price_update
      if ( params[:amount].to_i > 0)
        @update.posotoita = params[:amount].to_i
        @update.price_sum = ( @update_price * params[:amount].to_i )
        @update.save
      else
        @update.destroy
      end
    end

    def color_epistrofi 
  	  @color_epistrofi = Color.where(:name => params[:color]).first.code

  	  respond_to do |format|
        format.json { render json: @color_epistrofi.to_json}
      end
    end

    ######## User ########

    def user_diax
    	@pseudo = SimpleUserPse.where(:user_id => current_user.id)
    	if ( params[:istoriko] == "1")
    		@pseudo = SimpleUserPse.where(:user_id => params[:user])
    	end
    	@admin = current_user.admin
    	##########

    	user = User.where(:id => current_user.id).first
    	#@customers = SimpleUserPse.where(:user_id => user.id)
    	@customers = SimpleUserPse.where(:dealer_num => user.sungate_code)

    	#@paraggelies = Paraggelia.where(:user => current_user.id, :done => 0)
    	@paraggelies = Paraggelia.search(params[:search],current_user.id,params[:all])

    	sunolo = 0

        paraggelies_order = Paraggelia.all
            
        paraggelies_order.each do |i| 
        	offer = Order.where(:paraggelia_id => i.id).all
        	offer.each do |o| 
                sunolo = sunolo + o.price_sum 
            end
            i.sum = sunolo
            i.save
            sunolo = 0
        end 

       
    	if( !params[:customer].nil? )
            @paraggelies = Paraggelia.where(:customer => params[:customer]).order("id").reverse
            #@paraggelies = Paraggelia.search(params[:search],params[:customer],params[:all])
    	end
    	if( params[:customer] == "0" )
            @paraggelies = Paraggelia.where(:user => current_user.id)
            @paraggelies = Paraggelia.search(params[:search],current_user.id,params[:all])
    	else
    		@paraggelies = Paraggelia.where(:user => current_user.id).order("id")
    		@paraggelies = Paraggelia.search(params[:search],current_user.id,params[:all])
    	end

    
    	if(params[:order] == "price_low")
            @paraggelies = Paraggelia.where(:user => current_user.id).order("sum")
    	end
    	if(params[:order] == "price_high")
            @paraggelies = Paraggelia.where(:user => current_user.id).order("sum").reverse
    	end
    	if(params[:order] == "code_low")
            @paraggelies = Paraggelia.where(:user => current_user.id).order("id")
    	end
    	if(params[:order] == "code_high")
            @paraggelies = Paraggelia.where(:user => current_user.id).order("id").reverse
    	end
    	if(params[:order] == "date_old")
            @paraggelies = Paraggelia.where(:user => current_user.id).order("created_at")
    	end
    	if(params[:order] == "date_new")
            @paraggelies = Paraggelia.where(:user => current_user.id).order("created_at").reverse
    	end
    	if(params[:order] == "name_a")
    		@paraggelies = Paraggelia.where(:user => current_user.id).order("eponimo")
    	end
    	if(params[:order] == "name_z")
    		@paraggelies = Paraggelia.where(:user => current_user.id).order("eponimo").reverse
    	end
 
    end

    def history
    	@admin = current_user.admin
    	##########

    	user = User.where(:id => current_user.id).first
    	#@customers = SimpleUserPse.where(:user_id => user.id)
    	@customers = SimpleUserPse.where(:dealer_num => user.sungate_code)

    	@paraggelies = Paraggelia.where(:user => current_user.id, :done => 1)

    	sunolo = 0

        paraggelies_order = Paraggelia.all
            
        paraggelies_order.each do |i| 
        	offer = Order.where(:paraggelia_id => i.id).all
        	offer.each do |o| 
                sunolo = sunolo + o.price_sum 
            end
            i.sum = sunolo
            i.save
            sunolo = 0
        end 

       
    	if( !params[:customer].nil? )
            @paraggelies = Paraggelia.where(:customer => params[:customer], :done => 1).order("created_at").reverse
            
    	end
    	if( params[:customer] == "0" )
            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 1)
    	end

    
    	if(params[:order] == "price_low")
            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 1).order("sum")
    	end
    	if(params[:order] == "price_high")
            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 1).order("sum").reverse
    	end
    	if(params[:order] == "code_low")
            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 1).order("id")
    	end
    	if(params[:order] == "code_high")
            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 1).order("id").reverse
    	end
    	if(params[:order] == "date_old")
            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 1).order("created_at")
    	end
    	if(params[:order] == "date_new")
            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 1).order("created_at").reverse
    	end
    	if(params[:order] == "name_a")
    		@paraggelies = Paraggelia.where(:user => current_user.id, :done => 1).order("eponimo")
    	end
    	if(params[:order] == "name_z")
    		@paraggelies = Paraggelia.where(:user => current_user.id, :done => 1).order("eponimo").reverse
    	end

    end

    def history_admin
    	  @user = User.all
		  @pseudo = PseUser.all

		  user = User.all
	    	#@customers = SimpleUserPse.where(:user_id => user.id)
	    	@customers = SimpleUserPse.all

	    	#@paraggelies = Paraggelia.where(:user => current_user.id, :done => 0)
	    	@paraggelies = Paraggelia.where(:done => 1)

	    	sunolo = 0

	        paraggelies_order = Paraggelia.all
	            
	        paraggelies_order.each do |i| 
	        	offer = Order.where(:paraggelia_id => i.id).all
	        	offer.each do |o| 
	                sunolo = sunolo + o.price_sum 
	            end
	            i.sum = sunolo
	            i.save
	            sunolo = 0
	        end 

	       
	    	if( !params[:customer].nil? )
	            @paraggelies = Paraggelia.where(:customer => params[:customer], :done => 1).order("created_at").reverse
	            #@paraggelies = Paraggelia.search(params[:search],params[:customer],params[:all])
	    	end
	    	if( params[:customer] == "0" )
	            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 1)
	    	end

	    
	    	if(params[:order] == "price_low")
	            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 1).order("sum")
	    	end
	    	if(params[:order] == "price_high")
	            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 1).order("sum").reverse
	    	end
	    	if(params[:order] == "code_low")
	            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 1).order("id")
	    	end
	    	if(params[:order] == "code_high")
	            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 1).order("id").reverse
	    	end
	    	if(params[:order] == "date_old")
	            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 1).order("created_at")
	    	end
	    	if(params[:order] == "date_new")
	            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 1).order("created_at").reverse
	    	end
	    	if(params[:order] == "name_a")
	    		@paraggelies = Paraggelia.where(:user => current_user.id, :done => 1).order("eponimo")
	    	end
	    	if(params[:order] == "name_z")
	    		@paraggelies = Paraggelia.where(:user => current_user.id, :done => 1).order("eponimo").reverse
	    	end
    end


    ## Σελίδα με φόρμα για δημιουργία νέου pseudoUser.
    def simple_user_cr
    end

    def select_customer
    	user = User.where(:id => current_user.id).first
    	#@customers = SimpleUserPse.where(:user_id => user.id)
    	#@customers = SimpleUserPse.where(:dealer_num => user.sungate_code).order("eponimo")
    	@customers = SimpleUserPse.search(params[:search],user.sungate_code,params[:all])
    	@pse = PseUser.search_pse(params[:search],user.id,params[:all])
    end

    def new_offer
    	offer = Paraggelia.new
    	offer_id = offer.id
    	offer.user = current_user.id
    	offer.customer = params[:customer_id]
    	eponimo_customer = SimpleUserPse.where(:id => params[:customer_id]).first
    	offer.eponimo = eponimo_customer.eponimo
    	offer.name = eponimo_customer.name
    	offer.company = eponimo_customer.company
    	offer.done = 0
    	offer.sum = 0
    	offer.pososto = 0
    	offer.pososto_sun = 0
    	offer.save
    	offer_id = Paraggelia.order("created_at").last.id
    	redirect_to etic_simple_pse_user_path(:paraggelia_id => offer_id)
    end

    ## Δημιουργία νέου user. 
    def add_simple_user
  	  user = SimpleUserPse.new
 
  	  user.name  = params[:onoma]
  	  user.eponimo = params[:eponimo]
  	  user.company = params[:company]
  	  user.phone = params[:phone]
  	  user.email = params[:email]
  	  user.address = params[:address]
  	  user.user_id = current_user.id
  	  user.save
  	  if !user.new_record?
  	  	redirect_to etic_user_diax_path
  	  else
  	    redirect_to etic_simple_user_cr_path
  	  end
  	  #if( !params[:onoma].present? && !params[:eponimo].present? && !params[:company].present? && !params[:phone].present? && !params[:email].present? && !params[:address].present?)
    end

    ## Καλάθι των pseudoUser όταν μπαίνω σαν admin.
	def simple_pse_user_card
        @par = Paraggelia.where(:id => params[:id]).first##0.018
        if ( current_user.admin == 1)
            @admin = "0" #Για να φενεται παντα
            @dealer_id = @par.user
        else
        	@dealer_id = 0
        end

        @done = @par.done
        @user = SimpleUserPse.where(:id => @par.customer).first##0.014
		@paraggelia_id = params[:id]
		@sum = @par.sum
		@pososto_par = @par.pososto
		@meta_pososto = @par.meta_pososto
		@pososto = @user.pososto
		@pososto_par_sun = @par.pososto_sun
		@pososto_sun = @user.pososto_sun
            @items =  Order.where(:paraggelia_id => params[:id]).order("aukson")#0.043
            @sunolo = 100
            @number = @items.count
            #@sunolo = 0; 
            #  @items.each do |i| 
	        #      @sunolo = @sunolo + i.price_sum #panta to swsto
	        #  end 

        
        #@done = @user.done
        #@admin = params[:admin]
	end

	def update_pososto
		item = Paraggelia.where(:id => params[:id]).first
		item.pososto = params[:poso]
		item.meta_pososto = item.meta_pososto - ( (item.meta_pososto * params[:poso].to_f)/100 )
		@pisw = item.meta_pososto
		item.save 
		@ok = "ok"
		respond_to do |format|
        	format.json { render json: @pisw.to_json}
      	end
	end

	def update_pososto_sun
		item = Paraggelia.where(:id => params[:id]).first
		item.pososto_sun = params[:poso]
		item.meta_pososto = item.sum
		item.meta_pososto = item.sum + ( (item.sum * params[:poso].to_f)/100 )
		@pisw = item.meta_pososto
		item.save 
		@ok = "ok"
		respond_to do |format|
        	format.json { render json: @pisw.to_json}
      	end
	end

	def update_sxolia
		item = Order.where(:id => params[:id]).first
		item.sxolia = params[:val]
		item.save
		@ok = "ok"
		respond_to do |format|
        	format.json { render json: @ok.to_json}
      	end
	end


	##Ολοκλήρωση παραγγελίας. Κάνω done τον simple user pses
	def oloklirwsi_simple_user_pses
		#user = SimpleUserPse.where(:id => params[:id]).first
        #user.done = 1
        #user.save
        #redirect_to etic_user_diax_path
        paraggelia = Paraggelia.where(:id => params[:id]).first
        paraggelia.done = 1
        paraggelia.save
        redirect_to etic_user_diax_path

	end

	## Διαγραφή παραγγελίας pseudoUser
    def diagrafi_simple_user
  	  @item = Order.where(:paraggelia_id => params[:id])
      @item.each do |i|
      	File.delete("#{Rails.root}/public/upload/#{i.canvas}.png")
        i.destroy
      end
      paraggelia = Paraggelia.where(:id => params[:id]).first.destroy
      if ( current_user.admin == 1)
      	redirect_to etic_etic_card_path
      else
      	redirect_to etic_user_diax_path
      end
    end

    ## Περνάω ότι θέλω στο view του pdf. pdf_simple_user.pdf.prawn.
    def pdf_simple_user

  	  @items = Order.where(:paraggelia_id => params[:id]).order("aukson")
	  @sunolo = 0;
        @items.each do |i| #Γινεται και αυτοματα με το update γιατι ανανεονετε η σελιδα!!
          @sunolo = @sunolo + i.price_sum
        end
      paraggelia = Paraggelia.where(:id => params[:id]).first
      @user = SimpleUserPse.where(:id => paraggelia.customer).first
      @name = @user.name
      @surname = @user.eponimo
      @company = @user.company
      @address = @user.address
      @phone = @user.phone
      @email = @user.email
      @sum = paraggelia.sum
      @pososto_sun = paraggelia.pososto_sun
      @pososto = paraggelia.pososto
      @metaforika = paraggelia.metaforika
      @teliki = paraggelia.meta_pososto

      respond_to do |format|
      	format.html
        format.pdf do
        	pdf = Card_Pdf.new(@items, view_context, @user, @name, @surname, @company, @address, @phone, @email, @sum, @pososto_sun, @pososto, @metaforika, @teliki)
        	send_data pdf.render, filename: "order.pdf", type: "application/pdf", disposition: 'inline'
        end 
      end
    end

    def pdf_simple_customer

  	  @items = Order.where(:paraggelia_id => params[:id]).order("aukson")
	  @sunolo = 0;
        @items.each do |i| #Γινεται και αυτοματα με το update γιατι ανανεονετε η σελιδα!!
          @sunolo = @sunolo + i.price_sum
        end
      paraggelia = Paraggelia.where(:id => params[:id]).first
      @user = SimpleUserPse.where(:id => paraggelia.customer).first
      @name = @user.name
      @surname = @user.eponimo
      @company = @user.company
      @address = @user.address
      @phone = @user.phone
      @email = @user.email
      @sum = paraggelia.sum
      @pososto_sun = paraggelia.pososto_sun
      @pososto = paraggelia.pososto
      @metaforika = paraggelia.metaforika
      @teliki = paraggelia.meta_pososto

      respond_to do |format|
      	format.html
        format.pdf do
        	pdf = Card_Pdf_Customer.new(@items, view_context, @user, @name, @surname, @company, @address, @phone, @email, @sum, @pososto_sun, @pososto, @metaforika, @teliki)
        	send_data pdf.render, filename: "order.pdf", type: "application/pdf", disposition: 'inline'
        end 
      end
    end

    ## Εξάγω την παραγγελία σε διάφωρα αρχεία. csv, xls, xml.
    def export_simple_user
  	  @items = Order.where(:paraggelia_id => params[:id])
  	  @sunolo = 0;
        @items.each do |i| #Γινεται και αυτοματα με το update γιατι ανανεονετε η σελιδα!!
          @sunolo = @sunolo + i.price_sum
        end
      paraggelia = Paraggelia.where(:id => params[:id]).first
      @user = SimpleUserPse.where(:id => paraggelia.customer).first
      @name = @user.name
      @surname = @user.eponimo
      @company = @user.company
      @address = @user.address
      @phone = @user.phone
      @email = @user.email
	  respond_to do |format|
        format.csv { filename = "SunGate-#{Time.now.strftime("Date:%d-%m-%Y ---Time:%H:%M:%S")}.csv" 
                     send_data @items.to_csv, :filename => filename} ##render text: @items.to_csv
        format.xls #{ render text: @items.to_csv(col_sep: "\t") }
        #format.xml { render xml: @items.to_xml, :only => [:id, :height, :width] }
       end 
    end

    ######## Admin ########
  
    ## Κύρια σελίδα του admin panel. Εμφανίζω admin και pdeudo.
    def etic_card
	  @user = User.all
	  @pseudo = PseUser.all

	  user = User.all
    	#@customers = SimpleUserPse.where(:user_id => user.id)
    	@customers = SimpleUserPse.all

    	#@paraggelies = Paraggelia.where(:user => current_user.id, :done => 0)
    	@paraggelies = Paraggelia.search_admin(params[:search],params[:all])

    	sunolo = 0

        paraggelies_order = Paraggelia.all
            
        paraggelies_order.each do |i| 
        	offer = Order.where(:paraggelia_id => i.id).all
        	offer.each do |o| 
                sunolo = sunolo + o.price_sum 
            end
            i.sum = sunolo
            i.save
            sunolo = 0
        end 

       
    	if( !params[:customer].nil? )
            @paraggelies = Paraggelia.where(:customer => params[:customer], :done => 0).order("created_at").reverse
            #@paraggelies = Paraggelia.search(params[:search],params[:customer],params[:all])
    	end
    	if( params[:customer] == "0" )
            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 0)
    	end

    
    	if(params[:order] == "price_low")
            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 0).order("sum")
    	end
    	if(params[:order] == "price_high")
            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 0).order("sum").reverse
    	end
    	if(params[:order] == "code_low")
            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 0).order("id")
    	end
    	if(params[:order] == "code_high")
            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 0).order("id").reverse
    	end
    	if(params[:order] == "date_old")
            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 0).order("created_at")
    	end
    	if(params[:order] == "date_new")
            @paraggelies = Paraggelia.where(:user => current_user.id, :done => 0).order("created_at").reverse
    	end
    	if(params[:order] == "name_a")
    		@paraggelies = Paraggelia.where(:user => current_user.id, :done => 0).order("eponimo")
    	end
    	if(params[:order] == "name_z")
    		@paraggelies = Paraggelia.where(:user => current_user.id, :done => 0).order("eponimo").reverse
    	end
	end

    ## Καλάθι του user όταν μπαίνω σαν admin.
    def etic_user_card
      @user = SimpleUserPse.where(:id => params[:id]).first
      @items =  Order.where(:user_id => @user.id) 
      @number = @items.count
      @sunolo = 0; 
           @items.each do |i| 
           @sunolo = @sunolo + i.price_sum 
        end 
        @user_id = params[:id]
    end

    ## Καλάθι των pseudoUser όταν μπαίνω σαν admin.
	def etic_pse_user_card
		@user = PseUser.where(:id => params[:id]).first
		@user_id = @user.id
           @items =  Order.where(:user_id => @user.id).where(:pse => 1) 
           @number = @items.count
           @sunolo = 0; 
             @items.each do |i| 
             @sunolo = @sunolo + i.price_sum 
          end 
	end

    ## Σελίδα με φόρμα για δημιουργία νέου pseudoUser.
    def new_user
    end

    ## Δημιουργία νέου user. 
    def add_user
  	  #user = PseUser.new
  	  user = SimpleUserPse.new
 
  	  user.name  = params[:name]
  	  user.eponimo = params[:surname]
  	  user.address = params[:address]
  	  user.company = params[:company]
  	  user.phone = params[:arithmos]
  	  user.email = params[:email]
  	  user.pososto = params[:pososto_miosis]
  	  user.pososto_sun = params[:pososto_sun]
  	  user.VAT = params[:vat]
  	  user.fax = params[:fax]
  	  user.country_code = params[:country]
  	  user.city = params[:city]
  	  user.mr = params[:man]
  	  user.mobile = params[:mobile]
  	  user.postal_code = params[:postal]
  	  user.dealer_num = current_user.sungate_code
  	  user.save
  	  rec = SimpleUserPse.order("created_at").last
  	  @id = rec.id
  	  respond_to do |format|
        format.json { render json: @id.to_json}
      end
  	  #if user.persisted?
  	  	#redirect_to etic_home_path(:pse_user => user.id)
  	  #	redirect_to etic_select_customer_path
  	  #else
  	  #  redirect_to etic_select_customer_path
  	  #end
  	  #if( !params[:onoma].present? && !params[:eponimo].present? && !params[:company].present? && !params[:phone].present? && !params[:email].present? && !params[:address].present?)
    end

    ## Διαγραφή παραγγελίας pseudoUser
    def diagrafi_admin
  	  @item = Order.where(:user_id => params[:id]).where(:pse => params[:pse])
      @item.each do |i|
        i.destroy
      end
      redirect_to etic_home_path
    end

    ## Update στην ποσότητα των κουφωμάτων της κάρτας του pseudoUser.
    def update_admin
  	  @update = Order.where(:id => params[:id]).first # Οταν εχω δυο ιδια προιοντα με ιδιο artikel εχω λαθος γιατι ανανεωνει μονο το ενα!!! Θέλω έλεγχο
  	  @paraggelia = Paraggelia.where(:id => @update.paraggelia_id).first
  	  @paraggelia.sum = @paraggelia.sum - @update.price_sum 
      @update_price = @update.price_update
      if ( params[:amount].to_i > 0)
        @update.posotoita = params[:amount].to_i
        @update.price_sum = ( @update_price * params[:amount].to_i )
        @paraggelia.sum = @paraggelia.sum + @update.price_sum 
        @paraggelia.save
        @update.save
      else
        @update.destroy
      end
    end

    ## Εξάγω την παραγγελία σε διάφωρα αρχεία. csv, xls, xml.
    def export_admin
  	  @items = Order.where(:user_id => params[:id], :pse => params[:pse])
	  respond_to do |format|
        format.csv { filename = "SunGate-#{Time.now.strftime("Date:%d-%m-%Y ---Time:%H:%M:%S")}.csv" 
                     send_data @items.to_csv, :filename => filename} ##render text: @items.to_csv
        format.xls { render text: @items.to_csv(col_sep: "\t") }
        format.xml { render xml: @items.to_xml, :only => [:id, :height, :width] }
       end 
    end

    ## Περνάω ότι θέλω στο view του pdf. pdf_admin.pdf.prawn. Pdf μονο για pseudoUsers.
    def pdf_admin
  	  @items = Order.where(:user_id => params[:id], :pse => params[:pse])
	  @sunolo = 0;
        @items.each do |i| #Γινεται και αυτοματα με το update γιατι ανανεονετε η σελιδα!!
          @sunolo = @sunolo + i.price_sum
        end
      @user = PseUser.where(:id => params[:id]).first
      @name = @user.name
      @surname = @user.eponimo
      @company = @user.company
      @address = @user.address
      @phone = @user.phone
      @email = @user.email
    end

    ## Αλλάζω την τιμή done στην βάση. Αν ολοκληρώθηκε την κάνω 1.
    def pse_done
      @user = PseUser.where(:id => params[:pse_user]).first
      if (params[:pse] == "0")
        @user = User.where(:id => params[:pse_user]).first
      end
      if params[:done] == '1'
        @user.done  = 1
      else
        @user.done  = 0
      end
      @user.save
      redirect_to etic_etic_card_path
    end


end



