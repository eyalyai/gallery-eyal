'use strict'

$(window).init(function() {
    renderPortfolio();
    renderModals();
})


function renderPortfolio() {
    var strHtmls = getProjs().map(function(proj) {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#${proj.id}-Modal">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                     <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid" src="${proj.imgUrl}" alt="">
            </a>
            <div class="portfolio-caption">
                <h4>${proj.name}</h4>
                <p class="text-muted">${proj.title}</p>
            </div>
        </div>`
    })
    strHtmls.join('');
    $('.portfolio-tbn').html(strHtmls);
}

function renderModals() {
    var strHtmls = getProjs().map(function(proj) {
        return `
        <div class="portfolio-modal modal fade" id="${proj.id}-Modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <h2>${proj.name}</h2>
                    <p class="item-intro text-muted">${proj.title}</p>
                    <img class="img-fluid d-block mx-auto" src="${proj.imgUrl}" alt="">
                    <p>${proj.desc}</p>
                    <ul class="list-inline">
                        <li>Date: ${proj.publishedAt}</li>
                        <li>Client: ${proj.labels[0]}</li>
                        <li>Category: ${proj.labels[1]}</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                        <i class="fa fa-times"></i>
                        Close</button>
                        <a href="${proj.url}"
                        <button class="btn btn-success" type="button">
                        <i class="fa fa-play"></i>
                        Opan Project</button>
                        </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `
    })
    strHtmls.join('');
    $('.modal-container').html(strHtmls)
}