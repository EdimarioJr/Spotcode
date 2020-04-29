# --------------
# GENEROS
# --------------

tmp = Rails.root.join("tmp")

rock = Category.create(name: "Rock")
rock.image.attach(io: File.open("#{tmp}/seeds_files/rock.jpg"), filename: "rock.jpg")

samba = Category.create(name: "Samba")
samba.image.attach(io: File.open("#{tmp}/seeds_files/samba.jpg"), filename: "samba.jpg")

jazz = Category.create(name: "Jazz")
jazz.image.attach(io: File.open("#{tmp}/seeds_files/jazz.jpg"), filename: "jazz.jpg")

bossa = Category.create(name: "Bossa Nova")
bossa.image.attach(io: File.open("#{tmp}/seeds_files/bossa_nova.jpg"), filename: "bossa_nova.jpg")


# JOAO GILBERTO

joao_gilberto = Artist.create(name: "João Gilberto")
joao_gilberto.photo.attach(io: File.open("#{tmp}/seeds_files/João_Gilberto_1973.jpg"), filename: "João_Gilberto_1973.jpg")

white_album = joao_gilberto.albums.create(title: "Álbum Branco", date: Time.strptime("22/04/2020", "%d/%m/%y"), category: samba)
white_album.cover.attach(io: File.open("#{tmp}/seeds_files/João_Gilberto_1973.jpg"), filename: "João_Gilberto_1973.jpg")

aguas = white_album.songs.create(title: "Águas de Março", played_count: Random.rand(1000))
aguas.file.attach(io: File.open("#{tmp}/seeds_files/songs/01 Águas de março.mp3"), filename: "01 Águas de março.mp3")

undiu = white_album.songs.create(title: "Undiú", played_count: Random.rand(1000))
undiu.file.attach(io: File.open("#{tmp}/seeds_files/songs/02 Undiú.mp3"), filename: "02 Undiú.mp3")

# TOM JOBIM

tom = Artist.create(name: "Tom Jobim")
tom.photo.attach(io: File.open("#{tmp}/seeds_files/wave_tom.jpg"), filename: "wave_tom.jpg")

wave = tom.albums.create(title: "Wave", date: Time.strptime("22/04/2020", "%d/%m/%y"), category: bossa)
wave.cover.attach(io: File.open("#{tmp}/seeds_files/wave_tom.jpg"), filename: "wave_tom.jpg")

baixa_sapateiro = wave.songs.create(title: "Na baixa do sapateiro", played_count: Random.rand(1000))
baixa_sapateiro.file.attach(io: File.open("#{tmp}/seeds_files/songs/03 Na baixa do sapateiro.mp3"), filename: "03 Na baixa do sapateiro.mp3")

avarandado = wave.songs.create(title: "Avarandado", played_count: Random.rand(1000))
avarandado.file.attach(io: File.open("#{tmp}/seeds_files/songs/04 Avarandado.mp3"), filename: "04 Avarandado.mp3")

# THE BEATLES

beatles = Artist.create(name: "The beatles")
beatles.photo.attach(io: File.open("#{tmp}/seeds_files/beatles_1.jpg"), filename: "beatles_1.jpg")

abbey = beatles.albums.create(title: "Abbey Road", date: Time.strptime("22/04/2020", "%d/%m/%y"), category: rock)
abbey.cover.attach(io: File.open("#{tmp}/seeds_files/Abbey_Road.jpg"), filename: "Abbey_Road.jpg")

falsa_baiana = abbey.songs.create(title: "Falsa Baiana", played_count: Random.rand(1000))
falsa_baiana.file.attach(io: File.open("#{tmp}/seeds_files/songs/05 Falsa Baiana.mp3"), filename: "05 Falsa Baiana.mp3")

quero_samba = abbey.songs.create(title: "Eu quero um samba", played_count: Random.rand(1000))
quero_samba.file.attach(io: File.open("#{tmp}/seeds_files/songs/06 Eu quero um samba.mp3"), filename: "06 Eu quero um samba.mp3")


# USUARIOS

edimario = User.create(name: "Edimário Júnior", email: "edimario@junior.com", password: "123456", password_confirmation: "123456")
edimario.favorites.create(favoritable: abbey)
edimario.favorites.create(favoritable: wave)
edimario.recently_heards.create(album: abbey)


anna = User.create(name: "Anna Laura Santos Moura", email:"anna@moura", password: "654321", password_confirmation: "654321")
anna.favorites.create(favoritable: white_album)
anna.recently_heards.create(album: wave)