$(function() {
  init();
  console.log("Main init Called");
});

function initFileRankBrd () {

  var index = 0;
  var file = FILES.FILE_A;
  var rank = RANKS.RANK_1;
  var sq = SQUARES.A1;

  for( index = 0; index < BRD_SQ_NUM; ++index ) {
    FilesBrd[index] = SQUARES.OFFBOARD;
    RanksBrd[index] = SQUARES.OFFBOARD;
  }

  for (rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
    for (file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
      sq = filesAndRankToSq(file, rank);
      FilesBrd[sq] = file;
      RanksBrd[sq] = rank;
    };
  };
};

function init() {
  console.log("init() called");
};
