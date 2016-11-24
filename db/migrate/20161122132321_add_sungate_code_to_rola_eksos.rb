class AddSungateCodeToRolaEksos < ActiveRecord::Migration
  def change
    add_column :rola_eksos, :sungate_code, :string
  end
end
