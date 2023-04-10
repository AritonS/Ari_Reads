# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(username: 'user1', email: 'user1@example.com', password: 'password123')
user2 = User.create!(username: 'user2', email: 'user2@example.com', password: 'password123')
user3 = User.create!(username: 'user3', email: 'user3@example.com', password: 'password123')

list1 = List.create!(user_id: user1.id)
list2 = List.create!(user_id: user2.id)
list3 = List.create!(user_id: user3.id)

book1 = Book.create!(
  list_id: list1.id,
  title: 'Violet Bent Backwards Over the Grass',
  author: 'Lana Del Rey',
  status: 2
)

book2 = Book.create!(
  list_id: list1.id,
  title: 'A Darker Shade of Magic',
  author: 'V.E. Schwab',
  status: 2
)

book3 = Book.create!(
  list_id: list1.id,
  title: 'Ninth House',
  author: 'Leigh Bardugo',
  status: 1,
  total_pages: 461,
  current_page: 56
)

book4 = Book.create!(
  list_id: list1.id,
  title: 'Our Missing Hearts',
  author: 'Celeste Ng',
  status: 0
)
