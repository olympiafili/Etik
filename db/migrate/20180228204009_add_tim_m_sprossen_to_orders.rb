class AddTimMSprossenToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :timi_m_sprossen, :float
  end
end
