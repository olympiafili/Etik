class AddSungateCodeToRolaColors < ActiveRecord::Migration
  def change
    add_column :rola_colors, :sungate_code, :string
  end
end
