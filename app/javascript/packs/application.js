/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


import { start_click } from '../plugins/start';
start_click();

import { nursery_qst } from '../plugins/nursery';
nursery_qst();

import { next_click } from '../plugins/next';
next_click();

import { company_qst } from '../plugins/company';
company_qst();

import { true_click } from '../plugins/true';
true_click();

import { idea_click } from '../plugins/idea';
idea_click();

import { help_click } from '../plugins/help';
help_click();
