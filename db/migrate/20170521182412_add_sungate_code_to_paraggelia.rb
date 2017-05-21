class AddSungateCodeToParaggelia < ActiveRecord::Migration
  def change
    add_column :paraggelia, :sungate_code, :string
  end
end
