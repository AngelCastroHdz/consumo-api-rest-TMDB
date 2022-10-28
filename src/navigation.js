import { getTrandingMoviesPreview, getCategoriesMoviesPreview, getMoviesByCategory, getMoviesBySearch, getTrandingMovies, getMovieById } from './main.js'

const navigator = () => {
    window.scrollTo(0, 0);
    const hash = location.hash

    if (hash.startsWith('#trends')) {
        trendsPage()
    } else if (hash.startsWith('#search=')) {
        searchPage()
    } else if (hash.startsWith('#movie=')) {
        movieDetailesPage()
    } else if (hash.startsWith('#category=')) {
        categoriesPage()
    } else {
        homePage()
    }
}

searchFormBtn.addEventListener('click', (e) => {
    location.hash = `#search=${searchFormInput.value}`
})

trendingBtn.addEventListener('click', (e) => {
    location.hash = '#trends'
})


arrowBtn.addEventListener('click', (e) => {
    location.hash = window.history.back();
})

window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

const homePage = () => {
    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    arrowBtn.classList.add('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.remove('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.remove('inactive')
    categoriesPreviewSection.classList.remove('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.add('inactive')
    
    getTrandingMoviesPreview()
    getCategoriesMoviesPreview()
}

const categoriesPage = () => {
    console.log('Categories Page')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

    const [_, categoyData] = location.hash.split('=')
    const [categoryId, categoryName] = categoyData.split('-')

    headerCategoryTitle.innerHTML = categoryName
    getMoviesByCategory(categoryId)
}

const movieDetailesPage = () => {
    console.log('Movie Page')

    headerSection.classList.add('header-container--long')
    // headerSection.style.background = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.add('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.remove('inactive')

    const [_, id] = location.hash.split('=')

    getMovieById(id);
}

const searchPage = () => {
    console.log('Search Page')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.add('inactive')
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

    const [_, query] = location.hash.split('=')

    getMoviesBySearch(query)
}

const trendsPage = () => {
    console.log('Trends Page')

    headerSection.classList.remove('header-container--long')
    headerSection.style.background = ''
    arrowBtn.classList.remove('inactive')
    arrowBtn.classList.remove('header-arrow--white')
    headerTitle.classList.add('inactive')
    headerCategoryTitle.classList.remove('inactive')
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

    headerCategoryTitle.innerHTML = 'Tendencias'
    
    getTrandingMovies()
}