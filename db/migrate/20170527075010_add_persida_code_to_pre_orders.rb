class AddPersidaCodeToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :persida_code, :string
  end
end
