const findBlockByAlias = alias => {
   return $(".reviews__item").filter((ndx, item) => {
        return $(item).attr("data-linked-with") == alias;
    });
};

$(".interactive-avatar__link").click ((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const ItemToShow = findBlockByAlias(target);
    const curItem = $this.closest(".interactive-avatar");

    ItemToShow.addClass("active").siblings().removeClass("active");
    curItem.addClass("interactive-avatar_active").siblings().removeClass("interactive-avatar_active");
});