class AddSecColorOdoigouToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :sec_color_odoigou, :string
  end
end
