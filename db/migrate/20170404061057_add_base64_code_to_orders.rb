class AddBase64CodeToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :base64_code, :blob
  end
end
