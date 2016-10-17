class AddDiorthwshMetraToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :pl_rolou_ep, :float
    add_column :orders, :up_rolou_ep, :float
    add_column :orders, :pl_rolou_ek, :float
    add_column :orders, :up_rolou_ek, :float
    add_column :orders, :pl_persidas, :float
    add_column :orders, :up_persidas, :float
    add_column :orders, :up_odigou, :float
    add_column :orders, :kinisi_deksia_aristera, :text
  end
end
