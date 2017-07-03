class AddCodeToRolaPerColors < ActiveRecord::Migration
  def change
    add_column :rola_per_colors, :code, :string
  end
end
