class AddTyposNumToPreOrders < ActiveRecord::Migration
  def change
    add_column :pre_orders, :typos_num, :float
  end
end
