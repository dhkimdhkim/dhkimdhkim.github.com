'use strict';

const _html = document.querySelector('html');
const _body = document.querySelector('body');
const ua = window.navigator.userAgent.toLowerCase();


document.addEventListener('DOMContentLoaded', function() {


});

document.addEventListener('resize', function() {

});

window.onload = function() {

    // 전체동의
    /* document.querySelector('.all-check').onclick =  function (e) {
        const _inputs = document.querySelectorAll('.e-check_range input[type=checkbox]');
        const _submitBtn = document.querySelector('.btn-primary');

        for(const _input of _inputs ) {
            _input.checked = this.checked;
        }
        _submitBtn.classList.toggle('disabled');
    };

    const _inputs = document.querySelectorAll('.e-check_range .form-chk input[type=checkbox]');
    const _allInput = document.querySelector('.all-check');
    const _submitBtn = document.querySelector('.btn-primary');
    let requiredCheckedCount = 0, requiredTotalCount = 0, checkedCount = 0;

    _inputs.forEach(_input => {
        _input.required ? requiredTotalCount += 1 : requiredTotalCount;

        _input.addEventListener('click', function(e) {
            if(_input.checked) {
                checkedCount += 1;
                _input.required ? requiredCheckedCount += 1 : requiredCheckedCount;
            } else {
                checkedCount -= 1;
                _input.required ? requiredCheckedCount -= 1 : requiredCheckedCount;
            }

            if(requiredTotalCount === requiredCheckedCount) {
                _submitBtn.classList.remove('disabled');
            } else {
                _submitBtn.classList.add('disabled');
            }

            _inputs.length === checkedCount ? _allInput.checked = true : _allInput.checked = false;
        });
    }); */


    _body.addEventListener('click', function(e) {
        // e.preventDefault();
        let target = e.target;
        let requiredCheckedCount = 0, requiredTotalCount = 0, checkedCount = 0;

        // console.log(target.tagName.toLowerCase());

        switch(target.tagName.toLowerCase()) {
            case 'input':
                // console.log('____input', target.getAttribute('type'));
                switch(target.getAttribute('type')) {
                    case 'checkbox':
                        const _allChk = document.querySelector('.all-check');
                        const _inputs = document.querySelectorAll('.e-check_range input[type=checkbox]');
                        const _chidrenInput = document.querySelectorAll('.e-check_range .form-chk input[type=checkbox]');
                        const _submitBtn = document.querySelector('.btn-primary');

                        if(target.classList.contains('all-check')) {
                            for(const _input of _inputs ) {
                                _input.checked = _allChk.checked;
                                console.log('____checkbox', _input.checked);
                            }
                            _submitBtn.classList.toggle('disabled');
console.log('all check');
                        } else {
                            _chidrenInput.forEach(_childInput => {
                                _childInput.required ? requiredTotalCount += 1 : requiredTotalCount;

                                if(_childInput.checked) {
                                    checkedCount += 1;
                                    _childInput.required ? requiredCheckedCount += 1 : requiredCheckedCount;
                                    console.log('checked: requiredCheckedCount', requiredCheckedCount);
                                } else {
                                    checkedCount -= 1;
                                    _childInput.required ? requiredCheckedCount -= 1 : requiredCheckedCount;
                                    console.log('unchecked: requiredCheckedCount', requiredCheckedCount);
                                }

                                if(requiredTotalCount === requiredCheckedCount) {
                                    _submitBtn.classList.remove('disabled');
                                } else {
                                    _submitBtn.classList.add('disabled');
                                }
console.log('etc', requiredCheckedCount, requiredTotalCount, checkedCount);
                                _childInput.length === checkedCount ? _allChk.checked = true : _allChk.checked = false;
                            });
                        }
                        break;
                }
                break;
        }
    });

    /* document.querySelector().onclick = function (e) {
        
    }

    document.querySelector().onclick = function (e) {
        
    }

    document.querySelector().onclick = function (e) {
        
    } */


};


/*
$(function() {

    'use strict';

    const $window = window.$window || $(window);
    const $html = window.$html || $('html');
    const $body = $('body');
    const ua = window.navigator.userAgent.toLowerCase();

    $body.on('click', ':checkbox:not(:first)', $('.section-terms_agree'), function(){
        let all = $('.section-terms_agree');
        let allCnt = $(":checkbox:not(:first)", all).length;
        let checkedCnt = $(":checkbox:not(:first)", all).filter(":checked").length;
        let requiredCheck = $(":checkbox:not(:first)", all).filter(":visible[required]");
        let  count = 0;

        $.each(requiredCheck, function(index, checkbox) {
            let checked = $(checkbox).prop('checked');
            count = checked ? count+= 1 : count;

            if (requiredCheck.length === count) {
            $('.btn-primary').removeClass('disabled');
            } else {
            $('.btn-primary').addClass('disabled');
            }
        });

        if(allCnt === checkedCnt) {
            $(':checkbox:first', all).prop('checked', true);
        }
        else{
            $(':checkbox:first', all).prop('checked', false);
        }
    });

    // form-group
    $body.on('focus blur', '.form-group input' ,function(e) {
        let $this = $(e.currentTarget);
        let $targetParents = $this.closest('.form-group');

        if(!$this.prop('readonly')) {
            $targetParents.toggleClass('on');
        }
    });

    // layer
    let scrollTop;
    $body.on('click', '.e-layer', function (e) {
        e.preventDefault();
        let targetLayer = $($(e.currentTarget).attr('href'));
            scrollTop = window.pageYOffset;

        localStorage.setItem('scrollTop', scrollTop);
        
        $body.addClass("overlay indicator");

        // if (ua.match(/iPad/i) || ua.match(/iPhone/i)) {
        //     setTimeout(function(){
        //         $window.scrollTop(0);
        //     }, 200);
        // }

        $(targetLayer).fadeIn('fast').addClass('show');

        // 회사 선택 레이어 열릴 시
        let hasCompanyList = (targetLayer.attr('id') == 'layerCompanyList');
        if(hasCompanyList) {
            shortcutCompany();
        }
    });

    $body.on('click', '.layer .e-close, .layer .dimmed', function (e) {
        e.preventDefault();
        let findParent = $(this).parents('.layer');

        // for apple device
        // if (ua.match(/iPad/i) || ua.match(/iPhone/i)) {
        //     $window.scrollTop(scrollTop);
        //  }

        closeLayer(findParent);
    });

    // input text clear
    $body.on('click', '.e-clear-input', function(e) {
        e.preventDefault();
        let $findInput = $(this).closest('.form-group').find('input');

        clearLetters($findInput);
    });

    // tooltip
    $body.on('click', '.e-tooltip', function(e) {
        e.preventDefault();
        let $tooltipWrap = $(this).closest('.module-tooltip');

        $tooltipWrap.toggleClass('show');
    });

    // tab
    $body.on('click', '.e-tab .tab a', function(e) {
        e.preventDefault();
        var $this = $(e.target);
        var $tabItem = $this.closest('li'),
            _idx = $tabItem.index(),
            $wrap = $this.closest('.module-tab'),
            $targetContent = $($(e.currentTarget).attr('href'));

            // console.log($targetContent);

        $targetContent.addClass('on').siblings().removeClass('on');
        if ($tabItem.hasClass('on')) {
            $tabItem.removeClass('on');
        } else {
            $tabItem.addClass('on').siblings().removeClass('on');
        }
    });

});
*/
function closeLayer($layer) {
    const ua = window.navigator.userAgent.toLowerCase();
    let localStorageScrollTop = localStorage.getItem('scrollTop');

    $layer.removeClass('show');
    $('body').removeClass("overlay");

    if (ua.match(/iPad/i) || ua.match(/iPhone/i)) {
        $('window').scrollTop(localStorageScrollTop);
     }
     $layer.fadeOut().removeClass('show');

    localStorage.removeItem('scrollTop')
}

function deleteOneLetter($input) {
    let value = $($input).val(),
        setValue;

    setValue = value.slice(0, value.length === 0 ? 0 : value.length -1 );
    $($input).val(setValue);
}

function clearLetters($input) {
    $($input).val('');
}

function countValueLength($input) {
    let value = $($input).val(),
        valLength = value.length,
        dots = $('.module-password .dot');

    $.each(dots, function(index, dot) {
        valLength - 1 >= index ? $(dot).addClass('on') : $(dot).removeClass('on');
    });
}

// 회사 선택하기
function shortcutCompany() {
    let $shortcuts = $($('.module-company #shortcuts'));
    let $companyList = $($('.module-company .company'));
    let letters = $companyList.find('ul');
    let listPositionInfo = [],
        didScroll, presentScrollTop,
        lastScrollTop = $companyList.scrollTop();


    $.each(letters, function(index, letter) {
        let obj = {};

        let letterId = $(letter).attr('id');
        let letterPosition = $(letter).position().top;

        obj.id = letterId;
        obj.position = letterPosition;
        listPositionInfo.push(obj);
    }); 

    $('body').on('click', '#shortcuts a', function(e) {
        e.preventDefault();
        let $this = $(this),
            target = $this.attr('href').slice(1);
        let letterPositionTop = 0;
        
        for(let key in listPositionInfo) {
            target == listPositionInfo[key].id ? letterPositionTop = listPositionInfo[key].position : letterPositionTop = letterPositionTop;
        }

        $companyList.animate({scrollTop: letterPositionTop}, 500);
    });


    $companyList.on('scroll', function(e) {
        presentScrollTop = $companyList.scrollTop();

        if (lastScrollTop == presentScrollTop) {
            didScroll = false;
        } else if (lastScrollTop > presentScrollTop) {
            didScroll = true;
        } else {
            didScroll = true;
        }

        lastScrollTop =  $companyList.scrollTop();
    });

    setInterval(function() {
        if (didScroll) {
            addScroll(true);

            didScroll = false;
        } else {
            addScroll(false);
        }
    }, 100);

    function addScroll(didScroll){
        didScroll ? $shortcuts.addClass('scroll') : $shortcuts.removeClass('scroll');
    };
}