class AddColorEkswToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :main_color_eksw_id, :string
  end
end
