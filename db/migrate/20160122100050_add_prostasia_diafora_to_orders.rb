class AddProstasiaDiaforaToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :tm_p_prostasia, :float
    add_column :orders, :timi_m_p_prostasia, :float
  end
end
