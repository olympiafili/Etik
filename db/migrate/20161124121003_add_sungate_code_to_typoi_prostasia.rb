class AddSungateCodeToTypoiProstasia < ActiveRecord::Migration
  def change
    add_column :typoi_prostasia, :sungate_code, :string
  end
end
