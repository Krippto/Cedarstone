const Blog = () => {
    return (
        <>
            <div class="container">
                <header class="border-bottom lh-1 py-3">
                    <div class="row flex-nowrap justify-content-between align-items-center">
                        <div class="col-4 pt-1">
                            <a class="link-secondary" href="#">Subscribe</a>
                        </div>
                        <div class="col-4 text-center">
                            <a class="blog-header-logo text-body-emphasis text-decoration-none" href="#">Large</a>
                        </div>
                        <div class="col-4 d-flex justify-content-end align-items-center">
                            <a class="link-secondary" href="#" aria-label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                            </a>
                            <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                        </div>
                    </div>
                </header>

                <div class="nav-scroller py-1 mb-3 border-bottom">
                    <nav class="nav nav-underline justify-content-between">
                        <a class="nav-item nav-link link-body-emphasis active" href="#">World</a>
                        <a class="nav-item nav-link link-body-emphasis" href="#">U.S.</a>
                        <a class="nav-item nav-link link-body-emphasis" href="#">Technology</a>
                        <a class="nav-item nav-link link-body-emphasis" href="#">Design</a>
                        <a class="nav-item nav-link link-body-emphasis" href="#">Culture</a>
                        <a class="nav-item nav-link link-body-emphasis" href="#">Business</a>
                        <a class="nav-item nav-link link-body-emphasis" href="#">Politics</a>
                        <a class="nav-item nav-link link-body-emphasis" href="#">Opinion</a>
                        <a class="nav-item nav-link link-body-emphasis" href="#">Science</a>
                        <a class="nav-item nav-link link-body-emphasis" href="#">Health</a>
                        <a class="nav-item nav-link link-body-emphasis" href="#">Style</a>
                        <a class="nav-item nav-link link-body-emphasis" href="#">Travel</a>
                    </nav>
                </div>
            </div>
            <main className="container">
                <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                    <div class="col-lg-6 px-0">
                        <h1 class="display-4 fst-italic">Title of a longer featured blog post</h1>
                        <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                        <p class="lead mb-0"><a href="#" class="text-body-emphasis fw-bold">Continue reading...</a></p>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-md-6">
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-primary-emphasis">World</strong>
                                <h3 class="mb-0">Featured post</h3>
                                <div class="mb-1 text-body-secondary">Nov 12</div>
                                <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                                    Continue reading
                                    <svg class="bi"></svg>
                                </a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-success-emphasis">Design</strong>
                                <h3 class="mb-0">Post title</h3>
                                <div class="mb-1 text-body-secondary">Nov 11</div>
                                <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                                    Continue reading
                                    <svg class="bi"></svg>
                                </a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Blog