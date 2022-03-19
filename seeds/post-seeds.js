const Post = require("../models/Post");

const postData = [
  {
    id: 1,
    title: "Commodo ipsum est cillum consectetur duis aute ex est enim.",
    content:
      "Occaecat non pariatur et pariatur. Esse laboris est non qui est incididunt sit sunt sunt ipsum ipsum reprehenderit non commodo. Quis minim excepteur nisi reprehenderit ut. Consectetur minim ullamco aute ullamco ea in.",
    user_id: 3,
    imageUrl:
      "https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg",
  },
  {
    id: 2,
    title: "Ullamco laboris esse minim qui.",
    content: `"Deserunt consectetur laborum Lorem veniam voluptate. Duis nostrud non magna eu eiusmod veniam cupidatat aute enim fugiat. Cupidatat incididunt ad non amet quis eu nostrud labore commodo aute eu fugiat eiusmod sint. Qui exercitation fugiat est qui commodo ad irure.
    Sunt velit officia esse consequat reprehenderit do non irure eu consequat. Ea ea ullamco aliquip velit minim consectetur tempor dolore adipisicing duis reprehenderit deserunt. Irure cupidatat consequat adipisicing veniam Lorem. Ea eu mollit sunt esse eiusmod nulla et est irure est exercitation. Ut officia qui mollit ullamco aliquip pariatur ut. Et laboris velit incididunt reprehenderit excepteur esse adipisicing consectetur exercitation nostrud et velit aute dolor.
    Minim est laboris anim ea duis nostrud magna non exercitation laborum cillum duis do ut. Dolor qui laboris voluptate culpa exercitation pariatur. Est est tempor est quis laborum duis fugiat ex deserunt excepteur consequat occaecat aliqua excepteur. Ex officia eiusmod mollit nisi pariatur ea minim duis tempor veniam enim Lorem. Fugiat sit laboris ut nulla.
    Consectetur eiusmod laboris id nisi aliquip. Fugiat in laborum ipsum anim veniam aliquip ut ut magna anim Lorem labore nostrud do. Aliquip deserunt elit minim reprehenderit fugiat non ea cillum voluptate qui commodo et. Enim qui magna aliquip ipsum minim aute ex aliqua adipisicing minim tempor pariatur sint. Consequat reprehenderit minim ipsum aliqua nostrud.`,
    user_id: 3,
    imageUrl:
      "https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg",
  },
  {
    id: 3,
    title: "Ea officia tempor laboris esse qui.",
    content:
      "Aliquip laborum ipsum amet exercitation ea ex nisi dolore Lorem. Commodo voluptate aliqua ex deserunt fugiat aliquip qui aliquip reprehenderit reprehenderit. Laboris ea commodo id do. Voluptate velit adipisicing duis incididunt officia irure. Est duis qui amet ut. Proident aute enim fugiat aliqua adipisicing eu nisi amet. Aliqua exercitation id elit occaecat deserunt veniam.",
    user_id: 5,
    imageUrl:
      "https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg",
  },
  {
    id: 4,
    title: "Ex magna voluptate excepteur proident.",
    content: `Ex anim minim sint mollit eu velit occaecat Lorem anim in aliquip voluptate magna et. Anim ea ullamco adipisicing in voluptate officia in. Non non aliquip sunt eu consequat reprehenderit commodo tempor deserunt dolor sint consequat. Voluptate id fugiat minim amet amet aliquip eiusmod cillum in proident exercitation. Commodo non labore velit voluptate duis occaecat officia non aliqua enim laboris consectetur ut. Laborum occaecat aliqua nostrud quis ullamco aute et elit esse esse velit. Ut dolore adipisicing incididunt sit.
Fugiat do sunt eiusmod amet irure consectetur. Irure pariatur mollit laboris cupidatat esse mollit ullamco eu deserunt nisi irure. Est adipisicing id anim sint exercitation ex cillum nulla. Voluptate veniam nisi ea occaecat cillum cillum aliquip veniam. Aliqua tempor voluptate laboris exercitation aliquip dolore Lorem labore sit velit.
Irure commodo cillum nisi irure laborum veniam dolor culpa ea. Aute voluptate anim dolore elit ullamco nostrud commodo excepteur. Occaecat do in minim commodo ex exercitation. Nisi officia nisi voluptate laborum voluptate consectetur. Cupidatat dolor non labore dolore minim tempor ut nulla do laborum aliqua qui. Consectetur exercitation exercitation commodo velit mollit esse nulla tempor consectetur mollit eiusmod velit officia. Ullamco ipsum adipisicing ipsum exercitation culpa esse tempor magna do.
Qui reprehenderit non magna amet mollit sit. Enim ipsum labore Lorem ut irure pariatur do elit velit proident nulla amet. Eu elit ut officia nostrud dolore ea deserunt anim ipsum sit nulla. Quis consequat reprehenderit commodo sint laboris irure exercitation. Proident ex eiusmod labore exercitation incididunt culpa culpa veniam eiusmod ad excepteur ex Lorem proident.
Sit aute velit id ea occaecat. Ad culpa fugiat enim laboris ad culpa consequat. Mollit culpa proident veniam labore in elit culpa. Pariatur do irure et occaecat do reprehenderit sunt incididunt mollit adipisicing ea dolore et. Pariatur consequat et ad quis.
Nostrud do sit occaecat non mollit aute enim elit non qui. Tempor eu excepteur non aliqua non veniam fugiat elit. Sunt qui consequat eiusmod eiusmod excepteur magna labore sint nostrud. Irure culpa incididunt eu labore nulla consequat eiusmod deserunt ullamco ut magna consectetur. Irure esse tempor velit aliqua velit in duis fugiat amet et ex. Culpa enim duis aute Lorem cupidatat anim proident. Lorem id labore et velit aliquip laboris in magna labore veniam in.
Nisi veniam ullamco do ex nostrud elit ex do. Nostrud est qui incididunt irure. Ullamco nulla voluptate nisi elit anim dolore culpa incididunt. Veniam reprehenderit aliquip quis nostrud velit tempor cupidatat aute laborum Lorem amet minim cillum aute. Fugiat nisi Lorem consequat consectetur. Reprehenderit enim do aute incididunt culpa consequat quis aliqua ut. Est velit est mollit do cillum non et excepteur pariatur eiusmod nostrud ullamco mollit dolor.
Dolor qui culpa deserunt laborum mollit consequat incididunt. Minim ex esse occaecat ad amet. Qui sit commodo pariatur velit ea. Non proident tempor excepteur mollit dolore voluptate excepteur. Excepteur exercitation pariatur nulla culpa veniam sunt consequat cupidatat culpa exercitation proident. Irure amet incididunt in mollit occaecat aliqua nulla anim enim. Ex consequat consectetur magna laboris irure.`,
    user_id: 2,
    imageUrl:
      "https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg",
  },
  {
    id: 5,
    title:
      "Cupidatat duis excepteur consequat esse anim ea minim aute consectetur.",
    content:
      "Dolor consectetur fugiat sit ex reprehenderit laborum laboris dolor Lorem incididunt non officia duis nisi. Consectetur commodo incididunt pariatur magna. Esse reprehenderit in sit sint tempor consequat eu dolor ut magna est tempor. Sint duis eiusmod consequat elit tempor fugiat sint qui aliquip et. Mollit aliqua ex commodo cillum amet sunt ut enim tempor. Duis exercitation mollit sunt eiusmod ea exercitation ipsum tempor esse dolore exercitation.",
    user_id: 4,
    imageUrl:
      "https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg",
  },
  {
    id: 6,
    title:
      "Ex ad est aliqua commodo nisi culpa occaecat ea nostrud ad cupidatat.",
    content: `Officia nulla amet dolore dolore. Exercitation laboris reprehenderit esse excepteur ipsum occaecat ea dolore. Ea enim deserunt in minim. Et incididunt aliquip veniam consequat consectetur reprehenderit voluptate exercitation minim. Tempor esse reprehenderit ipsum aliqua adipisicing ullamco ipsum. Nostrud proident quis minim quis nisi exercitation eiusmod anim Lorem mollit qui duis commodo. Aliquip elit culpa dolore elit.
Enim anim ut officia laboris velit aute excepteur ea magna cupidatat excepteur. Elit est enim incididunt aliqua sint amet. Sint ut et deserunt dolor est.
Adipisicing exercitation dolor magna in qui eiusmod eu minim duis nisi in Lorem reprehenderit cupidatat. Adipisicing occaecat dolor in laborum eiusmod sint aliquip anim. In minim ut mollit veniam. Exercitation Lorem consequat nulla ex amet eiusmod minim cupidatat est nostrud in quis nisi voluptate. Labore irure duis nulla duis amet aute nostrud veniam laboris qui incididunt culpa nostrud culpa. Duis eiusmod amet nisi excepteur proident aute. Adipisicing veniam veniam ipsum incididunt anim tempor irure eu.
Ea consectetur esse ipsum est laboris occaecat esse ipsum esse anim aute. Id eu Lorem enim do in pariatur quis enim tempor exercitation non. Dolore anim sunt magna ut mollit tempor irure velit ex do deserunt id id.`,
    user_id: 1,
    imageUrl:
      "https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg",
  },
  {
    id: 7,
    title:
      "Nisi ex consectetur ea dolor mollit pariatur consequat incididunt magna occaecat veniam adipisicing.",
    content: `Excepteur enim aliquip aliqua ipsum tempor mollit aliqua aute duis qui exercitation do sunt. Aliquip do fugiat dolor non aute cillum duis. Voluptate minim et laboris anim anim. Ea est cillum aliqua non eu nostrud mollit velit in dolore nostrud elit non amet. Laborum exercitation anim deserunt aliquip ex qui magna tempor. Elit nostrud excepteur ullamco irure nostrud culpa culpa mollit amet aute incididunt. Exercitation pariatur laboris cillum aliqua.
Lorem irure quis id voluptate ea velit cupidatat ut elit. Laboris irure velit sunt sit consequat id veniam sit nisi eu Lorem. Anim deserunt aute commodo officia dolor tempor.
Voluptate dolore pariatur incididunt amet deserunt pariatur aliqua. Sit enim proident aliqua velit incididunt Lorem aute exercitation eiusmod et non quis. Mollit amet elit incididunt sit sit amet. Qui ut sit ut amet. Ad in deserunt laborum veniam Lorem.
Nostrud nulla nisi commodo est cillum. Id qui deserunt ea labore consequat dolore. Occaecat fugiat mollit labore esse ex. Aute ullamco non magna id est eu. Laboris nostrud non ullamco elit sunt aliquip qui nisi commodo occaecat reprehenderit irure. Fugiat dolore magna velit id velit cillum. Eiusmod est proident laboris anim occaecat excepteur ad dolor duis consequat.
Laborum sint anim in magna. Qui ut consectetur mollit sint esse culpa deserunt enim duis amet. Irure cupidatat duis id incididunt.`,
    user_id: 3,
    imageUrl:
      "https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg",
  },
  {
    id: 8,
    title: "Proident consequat est magna nulla incididunt et quis cupidatat.",
    content:
      "Non ex non esse ad enim proident ipsum mollit cupidatat ullamco minim voluptate. Exercitation exercitation nostrud qui excepteur amet. Enim duis occaecat eiusmod consequat est dolor aliqua culpa mollit fugiat sint.",
    user_id: 5,
    imageUrl:
      "https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg",
  },
  {
    id: 9,
    title:
      "In occaecat ut irure cillum sit excepteur duis aliqua in id veniam minim.",
    content: "Esse cupidatat non minim occaecat ex in do ut aliqua.",
    user_id: 3,
    imageUrl:
      "https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg",
  },
  {
    id: 10,
    title: "Occaecat ea et ex proident amet.",
    content:
      "Voluptate et sunt aliqua irure irure ea exercitation ut. Labore adipisicing tempor duis esse et nulla est. Magna mollit cupidatat magna proident occaecat nulla esse nulla id. Velit incididunt nulla non exercitation nisi nulla aliquip. Id deserunt amet ea aute do aute id cillum reprehenderit proident mollit quis excepteur.",
    user_id: 3,
    imageUrl:
      "https://www.teahub.io/photos/full/52-526204_4k-hd-wallpapers-technology.jpg",
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
