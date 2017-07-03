class AddCodeToRolaEpikColors < ActiveRecord::Migration
  def change
    add_column :rola_epik_colors, :code, :string
  end
end
