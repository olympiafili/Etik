class AddOrderDefaultToAllTables < ActiveRecord::Migration
  def change
	  tables = [:color_teams, :colors, :constructors, :eksoterikas, :epikathimenos, :glass_cat_in_outs, :glass_cat_ins, :glass_cat_outs, :istorikos, :leafs, :lines, :material_constructors, :materials, :open_categorie_leafs, :open_categories, :orders, :paraggelia, :persides, :pricelists, :profils, :pse_users, :rola_colors, :rola_eksos, :rola_epiks, :roll_guides, :simple_user_pses, :system_lines, :system_open_types, :systems, :termsops, :typoi_prostasia, :tzamia, :users]

	  tables.each do |table_name|
	    add_column table_name, :order, :integer
	    add_column table_name, :default, :integer
	  end
	end

end
