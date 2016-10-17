class AddTimesMetrouToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :timi_m_tzami1, :float
    add_column :orders, :timi_m_tzami2, :float
    add_column :orders, :timi_m_epik, :float
    add_column :orders, :timi_m_ekso, :float
    add_column :orders, :timi_m_persidas, :float
    add_column :orders, :timi_m_odoigou, :float
    add_column :orders, :timi_m_p_d_1, :float
    add_column :orders, :timi_m_p_d_2, :float
    add_column :orders, :timi_m_p_d_3, :float
    add_column :orders, :timi_m_p_a_1, :float
    add_column :orders, :timi_m_p_a_2, :float
    add_column :orders, :timi_m_p_a_3, :float
    add_column :orders, :timi_m_p_p_1, :float
    add_column :orders, :timi_m_p_p_2, :float
    add_column :orders, :timi_m_p_p_3, :float
    add_column :orders, :timi_m_p_k_1, :float
    add_column :orders, :timi_m_p_k_2, :float
    add_column :orders, :timi_m_p_k_3, :float
    add_column :orders, :timi_m_t_1, :float
  end
end
