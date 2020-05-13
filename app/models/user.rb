class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :recently_heards
  has_many :favorites

  def is_favorite? kind,id
    self.favorites.where(favoritable_type: kind, favoritable_id: id).present?
  end
  
end
