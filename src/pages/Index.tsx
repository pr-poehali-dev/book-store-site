import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  rating: number;
  image: string;
  price: string;
  genre: string;
}

interface AuthorEvent {
  id: number;
  author: string;
  date: string;
  time: string;
  book: string;
  description: string;
}

interface Review {
  id: number;
  name: string;
  book: string;
  text: string;
  rating: number;
}

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const books: Book[] = [
    {
      id: 1,
      title: 'Мастер и Маргарита',
      author: 'Михаил Булгаков',
      description: 'Роман о добре и зле, любви и предательстве. Сатирическая история о визите дьявола в советскую Москву.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
      price: '850₽',
      genre: 'Классика'
    },
    {
      id: 2,
      title: 'Преступление и наказание',
      author: 'Фёдор Достоевский',
      description: 'Психологический роман о студенте Раскольникове, решившемся на убийство и столкнувшемся с муками совести.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop',
      price: '920₽',
      genre: 'Классика'
    },
    {
      id: 3,
      title: 'Анна Каренина',
      author: 'Лев Толстой',
      description: 'История трагической любви замужней дамы высшего света Анны Карениной и блестящего офицера Вронского.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop',
      price: '1050₽',
      genre: 'Классика'
    },
    {
      id: 4,
      title: 'Евгений Онегин',
      author: 'Александр Пушкин',
      description: 'Роман в стихах о молодом дворянине, пресыщенном светской жизнью, и его неразделённой любви.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
      price: '680₽',
      genre: 'Поэзия'
    },
    {
      id: 5,
      title: 'Идиот',
      author: 'Фёдор Достоевский',
      description: 'Роман о князе Мышкине, человеке исключительной доброты и чистоты души в мире корысти и страстей.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=300&h=400&fit=crop',
      price: '890₽',
      genre: 'Классика'
    },
    {
      id: 6,
      title: 'Война и мир',
      author: 'Лев Толстой',
      description: 'Эпический роман о жизни русского общества в эпоху войн против Наполеона.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop',
      price: '1250₽',
      genre: 'Классика'
    }
  ];

  const authorEvents: AuthorEvent[] = [
    {
      id: 1,
      author: 'Дина Рубина',
      date: '15 декабря 2024',
      time: '18:00',
      book: 'Синдром Петрушки',
      description: 'Встреча с автором, обсуждение новой книги, автограф-сессия'
    },
    {
      id: 2,
      author: 'Евгений Водолазкин',
      date: '22 декабря 2024',
      time: '17:00',
      book: 'Лавр',
      description: 'Презентация переиздания романа, беседа о творчестве'
    },
    {
      id: 3,
      author: 'Захар Прилепин',
      date: '10 января 2025',
      time: '19:00',
      book: 'Обитель',
      description: 'Литературный вечер, чтение отрывков, вопросы-ответы'
    },
    {
      id: 4,
      author: 'Людмила Улицкая',
      date: '25 января 2025',
      time: '18:30',
      book: 'Зелёный шатёр',
      description: 'Встреча с читателями, обсуждение судьбы поколения'
    }
  ];

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Мария Петрова',
      book: 'Мастер и Маргарита',
      text: 'Невероятная книга! Перечитываю уже третий раз и каждый раз нахожу что-то новое. Спасибо магазину за прекрасное издание.',
      rating: 5
    },
    {
      id: 2,
      name: 'Алексей Смирнов',
      book: 'Преступление и наказание',
      text: 'Классика, которую должен прочитать каждый. Качество печати отличное, приятно держать в руках.',
      rating: 5
    },
    {
      id: 3,
      name: 'Елена Иванова',
      book: 'Анна Каренина',
      text: 'Очень атмосферный магазин и замечательный выбор книг. Консультанты помогли подобрать идеальное издание.',
      rating: 5
    }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '10 книг русской классики, которые стоит перечитать',
      date: '1 декабря 2024',
      excerpt: 'Возвращаемся к любимым произведениям и открываем их заново. Рассказываем, почему классика всегда актуальна...'
    },
    {
      id: 2,
      title: 'Как правильно хранить книги дома',
      date: '28 ноября 2024',
      excerpt: 'Советы по организации домашней библиотеки: от выбора полок до защиты от влаги и солнечного света...'
    },
    {
      id: 3,
      title: 'Новинки декабря: что почитать зимними вечерами',
      date: '25 ноября 2024',
      excerpt: 'Подборка новых изданий, которые согреют душу в холодные дни. От современной прозы до исторических романов...'
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            name={i < rating ? "Star" : "Star"}
            size={16}
            className={i < rating ? "fill-accent text-accent" : "text-muted"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="BookOpen" size={32} />
              <div>
                <h1 className="text-2xl font-bold">Читаем вместе</h1>
                <p className="text-sm opacity-90">Книжный магазин</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'catalog', label: 'Каталог', icon: 'Library' },
                { id: 'events', label: 'Встречи', icon: 'Calendar' },
                { id: 'new', label: 'Новинки', icon: 'Sparkles' },
                { id: 'reviews', label: 'Отзывы', icon: 'MessageCircle' },
                { id: 'blog', label: 'Блог', icon: 'Newspaper' },
                { id: 'contacts', label: 'Контакты', icon: 'MapPin' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-primary-foreground text-primary'
                      : 'hover:bg-primary-foreground/20'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="space-y-16 animate-fade-in">
            <section className="text-center space-y-6 py-12">
              <Icon name="BookHeart" size={64} className="mx-auto text-accent" />
              <h2 className="text-5xl font-bold text-primary">Добро пожаловать в мир книг</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Уютный книжный магазин с классической атмосферой. Здесь каждая книга — это путешествие,
                а каждый читатель — желанный гость.
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button size="lg" onClick={() => setActiveSection('catalog')} className="gap-2">
                  <Icon name="Library" size={20} />
                  Перейти в каталог
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveSection('events')} className="gap-2">
                  <Icon name="Calendar" size={20} />
                  Встречи с авторами
                </Button>
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-bold text-primary mb-8">Избранные книги</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {books.slice(0, 3).map(book => (
                  <Card key={book.id} className="hover-lift cursor-pointer">
                    <img src={book.image} alt={book.title} className="w-full h-64 object-cover rounded-t-lg" />
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{book.genre}</Badge>
                        {renderStars(book.rating)}
                      </div>
                      <CardTitle className="text-xl">{book.title}</CardTitle>
                      <CardDescription className="text-base">{book.author}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{book.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-accent">{book.price}</span>
                        <Button size="sm">Подробнее</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeSection === 'catalog' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-primary">Каталог книг</h2>
              <p className="text-lg text-muted-foreground">Лучшие произведения русской классики</p>
            </div>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="all">Все книги</TabsTrigger>
                <TabsTrigger value="classic">Классика</TabsTrigger>
                <TabsTrigger value="poetry">Поэзия</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {books.map(book => (
                    <Card key={book.id} className="hover-lift cursor-pointer">
                      <img src={book.image} alt={book.title} className="w-full h-64 object-cover rounded-t-lg" />
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="secondary">{book.genre}</Badge>
                          {renderStars(book.rating)}
                        </div>
                        <CardTitle className="text-xl">{book.title}</CardTitle>
                        <CardDescription className="text-base">{book.author}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">{book.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-accent">{book.price}</span>
                          <Button size="sm">В корзину</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="classic" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {books.filter(b => b.genre === 'Классика').map(book => (
                    <Card key={book.id} className="hover-lift cursor-pointer">
                      <img src={book.image} alt={book.title} className="w-full h-64 object-cover rounded-t-lg" />
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="secondary">{book.genre}</Badge>
                          {renderStars(book.rating)}
                        </div>
                        <CardTitle className="text-xl">{book.title}</CardTitle>
                        <CardDescription className="text-base">{book.author}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">{book.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-accent">{book.price}</span>
                          <Button size="sm">В корзину</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="poetry" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {books.filter(b => b.genre === 'Поэзия').map(book => (
                    <Card key={book.id} className="hover-lift cursor-pointer">
                      <img src={book.image} alt={book.title} className="w-full h-64 object-cover rounded-t-lg" />
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="secondary">{book.genre}</Badge>
                          {renderStars(book.rating)}
                        </div>
                        <CardTitle className="text-xl">{book.title}</CardTitle>
                        <CardDescription className="text-base">{book.author}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">{book.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-accent">{book.price}</span>
                          <Button size="sm">В корзину</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'events' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <Icon name="Users" size={48} className="mx-auto text-accent" />
              <h2 className="text-4xl font-bold text-primary">Встречи с авторами</h2>
              <p className="text-lg text-muted-foreground">
                Приглашаем на литературные вечера и автограф-сессии
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {authorEvents.map(event => (
                <Card key={event.id} className="hover-lift">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <Icon name="Calendar" size={24} className="text-accent" />
                      <div>
                        <CardTitle className="text-xl">{event.author}</CardTitle>
                        <CardDescription className="text-base mt-1">{event.book}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="CalendarDays" size={18} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={18} />
                      <span>{event.time}</span>
                    </div>
                    <p className="text-sm pt-2">{event.description}</p>
                    <Button className="w-full mt-4">
                      <Icon name="Ticket" size={18} className="mr-2" />
                      Зарегистрироваться
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'new' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <Icon name="Sparkles" size={48} className="mx-auto text-accent" />
              <h2 className="text-4xl font-bold text-primary">Новинки</h2>
              <p className="text-lg text-muted-foreground">Свежие поступления в нашем магазине</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.slice(0, 3).map(book => (
                <Card key={book.id} className="hover-lift cursor-pointer relative overflow-hidden">
                  <Badge className="absolute top-4 right-4 z-10 bg-accent">Новинка</Badge>
                  <img src={book.image} alt={book.title} className="w-full h-64 object-cover rounded-t-lg" />
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{book.genre}</Badge>
                      {renderStars(book.rating)}
                    </div>
                    <CardTitle className="text-xl">{book.title}</CardTitle>
                    <CardDescription className="text-base">{book.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{book.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-accent">{book.price}</span>
                      <Button size="sm">В корзину</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'reviews' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <Icon name="MessageCircle" size={48} className="mx-auto text-accent" />
              <h2 className="text-4xl font-bold text-primary">Отзывы читателей</h2>
              <p className="text-lg text-muted-foreground">
                Что говорят наши посетители о книгах и магазине
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {reviews.map(review => (
                <Card key={review.id} className="hover-lift">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <Icon name="User" size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <CardDescription className="text-sm italic">«{review.book}»</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center pt-8">
              <Button size="lg" variant="outline">
                <Icon name="Plus" size={20} className="mr-2" />
                Оставить отзыв
              </Button>
            </div>
          </div>
        )}

        {activeSection === 'blog' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <Icon name="Newspaper" size={48} className="mx-auto text-accent" />
              <h2 className="text-4xl font-bold text-primary">Блог о книгах</h2>
              <p className="text-lg text-muted-foreground">Статьи, обзоры и рекомендации</p>
            </div>

            <div className="space-y-6 max-w-3xl mx-auto">
              {blogPosts.map(post => (
                <Card key={post.id} className="hover-lift cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Icon name="CalendarDays" size={16} />
                      <span>{post.date}</span>
                    </div>
                    <CardTitle className="text-2xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="link" className="px-0">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <Icon name="MapPin" size={48} className="mx-auto text-accent" />
              <h2 className="text-4xl font-bold text-primary">Контакты</h2>
              <p className="text-lg text-muted-foreground">Будем рады видеть вас в нашем магазине</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Адрес и время работы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Адрес:</p>
                      <p className="text-muted-foreground">г. Москва, ул. Литературная, д. 15</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Время работы:</p>
                      <p className="text-muted-foreground">Пн-Пт: 10:00 - 21:00</p>
                      <p className="text-muted-foreground">Сб-Вс: 11:00 - 20:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Телефон:</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Email:</p>
                      <p className="text-muted-foreground">info@chitaem-vmeste.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Напишите нам</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="ivan@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <textarea
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring h-32"
                      placeholder="Ваше сообщение..."
                    />
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-primary text-primary-foreground mt-20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="BookOpen" size={32} />
                <h3 className="text-xl font-bold">Читаем вместе</h3>
              </div>
              <p className="text-sm opacity-90">
                Уютный книжный магазин с классической атмосферой. Погружайтесь в мир литературы вместе с нами.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Каталог книг</li>
                <li>Встречи с авторами</li>
                <li>Новинки</li>
                <li>Блог</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>г. Москва, ул. Литературная, д. 15</li>
                <li>+7 (495) 123-45-67</li>
                <li>info@chitaem-vmeste.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>© 2024 Читаем вместе. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
