class AddSungateCodeToRolaEpiks < ActiveRecord::Migration
  def change
    add_column :rola_epiks, :sungate_code, :string
  end
end
