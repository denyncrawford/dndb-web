<template>
  <page bg="bg-black">
    <div class="-mt-10 flex-col min-h-screen items-center justify-center flex text-center">
      <h1 class="text-main-color text-5xl mb-10">DnDB Documentation</h1>
      <p class="flex mb-10"><a href="https://nest.land/package/dndb"><img src="https://nest.land/badge.svg" alt="nest badge"></a> <img
          src="https://hitcounter.pythonanywhere.com/count/tag.svg?url=https%3A%2F%2Fgithub.com%2Fdenyncrawford%2Fdndb"
          alt="Hits" nii7lr0wn=""> <a class="ml-5" href="https://deno.land/x/dndb"><img
            src="https://img.shields.io/badge/deno-v1.1.3-green.svg?style=flat-square&amp;logo=deno" alt="(Deno)"></a> <a class="ml-5"
          href="https://github.com/denyncrawford/crawford/blob/master/LICENSE"><img
            src="https://img.shields.io/github/license/denyncrawford/dndb?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAEFCu8CAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAHKADAAQAAAABAAAAHAAAAABHddaYAAAC5UlEQVRIDd2WPWtVQRCGby5pVASLiGghQSxyG8Ui2KWwCfkH9olY2JneQkiR0oCIxH/gB+qVFDYBIWBAbAIRSbCRpLXwIxLiPT7vnNm9e87ZxJtUwYH3zO47Mzv7Mbv3tlo5KYriGtgAJ81OY1ENdG/YI4boFEOI911BXgY/pdtwGuAtXpvmB1tAXHDnUolE5urkPOQo6MqA3pXWmJJL4Bb4rQ7yEYfxsjnIF29NJIoNC6e5fxOL/qN+9KCz7AaLpN8zI415N2i2EptpGrkRIjGeAuvR6IY1hSFLFUOug9Ms2M7ZxIUNytm1mnME186sdI2BOCwAyQMg54ugzSmKmwbPwSbolKH+hbAtQdsOoF+BsF3anUVwBdiOWRidFZDKTTrKEAJTm3GVrGkHzw/uPZbyx7DNNLfB7KGmRsCcr+/gjaiPSpAOTyX9qG4L/XBDdWXDDf1M+wtQ5fwCOtcb4Dto6VpLmzByB6gqdHbTItGSJdAGqibJQhmRfCF7IN4beSF2G9CqnGXQrxofXU+EykllNeoczRgYytDKMubDIRK0g5MF8rE69cGu0u9nlUcqaUZ41W0qK2nGcSzr4D2wV9U9wxp1rnpxn8agXAOHMQ9cy9kbHM7ngY4gFb03TxrO/yfBUifTtXt78jCrjY/jgEFnMn45LuNWUtknuu7NSm7D3QEn3HbatV1Q2jvgIRf1sfODKQaeymxZoMLlTqsq1LF+HvaTqQOzEzUCfni0/eNIA+DfuE3KEtbsegckGmMktTXacnBHPVe687ugkpT+axCkkhBSyRSjWI2xf1KMMVmYiQdWksK9BEFiQoiYLIlvJA3/zeTzCejP0RbB6YPbhZuB+0pR3KcdX0LaJtju0ZgBL8Bd+sbz2QIaU2OfBX3BaQLsgZysQtrk0M8Sh1A0w3DyyYnGnAiZ4gqZ/TvI2A8OGd1YIbF7+F3P+B6dYpYdsJNZgrjO0UdOIhmom0nwL0pnfnzkL1803jAoKhvyAAAAAElFTkSuQmCC"
            alt="license"></a></p>
      <p class="max-w-prose">DnDB is a javascript persistent database written for deno and available for Typescript.</p>
      <p class="max-w-prose">Inspired by NeDB, DnDB is a rogbust but minimalist database engine written on JS that uses/amulates the mongo
        query API to edit and find data, making it 100% exportable to a mongojs environment.</p>
      <p class="inline-block ml-5 mt-5 text-gray">DnDB latest version is: <code>v{{version}}</code>.</p>
    </div>
    <div class="flex">
      <div class="w-96 mr-10">
        <div class="p-10 rounded-2xl sticky top-24">
          <h1 class="text-lg font-bold text-main-color mb-5">
            Contents
          </h1>
          <ul>
            <li class="mb-1"><a href="#usage">Usage</a></li>
            <li class="mb-1"><a href="#importing">Importing</a></li>
            <li class="mb-1"><a href="#instatiating-a-collection">Instantiating a collection</a></li>
            <li class="mb-1"><a href="#inserting-documents">API</a>
              <ul class="pl-4">
                <li class="mb-1"><a href="#inserting-documents">Inserting documents</a></li>
                <li class="mb-1"><a href="#finding-documents">Finding documents</a>
                  <ul class="pl-4">
                    <li class="mb-1"><a href="#projections">Projections</a></li>
                  </ul>
                </li>
                <li class="mb-1"><a href="#updating-documents">Updating documents</a></li>
                <li class="mb-1"><a href="#removing-documents">Removing documents</a></li>
              </ul>
            </li>
            <li class="mb-1"><a href="#contributing">Contributing</a></li>
          </ul>
        </div>
      </div>
      <div class="markdown" data-v-a5f3b890="">
        <h2 id="usage">📖 Usage</h2>
        <p>DnDB works by instantiating collections stored in a specific file given by the user in the instance
          configuration. By default the created instance exposes the necessary methods to work the datastore.</p>
        <p>All the api methods are asynchronous by default, so they return promises, but it's also possible to pass a
          callback to them to work in a traditional mongo way.</p>
          <blockquote>
            <p><em>Notice</em>: This project is under development, so it is subject to future improvements and changes.
            </p>
          </blockquote>
        <h2 id="importing">📦 Importing</h2>
        <p><strong>From deno.land</strong></p>
        <pre v-highlightjs><code class="javascript">import Datastore from 'https://deno.land/x/dndb@{{version}}/mod.ts'
</code></pre>
        <p><strong>From nest.land</strong></p>
        <pre v-highlightjs><code class="javascript">import Datastore from 'https://x.nest.land/dndb@{{version}}/mod.ts'
</code></pre>
        <h2 id="instatiating-a-collection">✔️ Instantiating the collection</h2>
        <pre v-highlightjs><code class="javascript">import Datastore from 'https://deno.land/x/dndb@{{version}}/mod.ts'
const db = new Datastore({ filename:"./database.db", autoload: true })
</code></pre>
        <p>When you instantiate a collection you can pass it a config object with a couple of options:</p>
        <ul>
          <li>
            <p><code>filename</code>: The filename is the absolute path to your traget file. If no filename is provided,
              DnDB will automatically create one in the current working directory, and if a full path is not specified,
              it
              will resolve the file name within the CWD.</p>
          </li>
          <li>
            <p><code>autoload</code>: The autoload option runs the <code>loadDatabase</code> method which creates the
              persistent file the first time DnDB is runing in your project, this is optional, but if the loadDatabase
              method is not executed, the instance will not work until the persistent file exists.</p>
          </li>
        </ul>
        <blockquote>
          <p><em>Notice</em>: The configuration content is currently in alpha, more options will be available soon.</p>
        </blockquote>
        <h2 id="inserting-documents">🖋️ Inserting documents</h2>
        <p>All data types are allowed, but field names starting with '$' are reserved for data querying.</p>
        <p>If the document does not contain an _id field, DnDB will automatically generated one for you (a RFC4122 UUID
          alphanumerical string). The _id of a document, once set, shouldn't be modified.</p>
        <pre v-highlightjs><code class="javascript">let obj = {
  name: 'denyn',
  lastname: 'crawford'
}

let insertion = await db.insert(obj)

// OR

db.insert(obj, (insertion) =&gt; {
  // ...foo(insetion)
})
</code></pre>
        <p>To insert documents DnDB exposes the method:</p>
        <ul>
          <li>
            <p><code>insert</code>:</p>
          </li>
          <li>
            <p>returns: Array/object with the inserted documents.</p>
          </li>
        </ul>
        <p>The insert method receives two arguments:</p>
        <ul>
          <li><code>data</code>: Json data to insert</li>
          <li><code>callback</code>(optional): The callback function to get the data inserted.</li>
        </ul>
        <p>You can also insert several documents at the same time by wrapping them in an array.</p>
        <pre v-highlightjs><code class="javascript">
let foo = "foo"

db.insert([ { name: 'denyn' }, { name: foo } ], (insertion) =&gt; {
  // ...foo(insetion)
})
</code></pre>
        <h2 id="finding-documents">🔍 Finding documents</h2>
        <p>To find documents DnDB exposes the methods:</p>
        <ul>
          <li>
            <p><code>find</code>: Finds all the documents that match the query.</p>
            <ul>
              <li>returns: array of matching documents</li>
            </ul>
          </li>
          <li>
            <p><code>findOne</code>: Finds the first document that matches the query.</p>
            <ul>
              <li>returns: exact first matching object</li>
            </ul>
          </li>
        </ul>
        <p>You can select documents based on field equality or use comparison operators (<code>$lt</code>,
          <code>$lte</code>, <code>$gt</code>, <code>$gte</code>, <code>$in</code>, <code>$nin</code>,
          <code>$neq</code>).
          You can also use logical operators <code>$or</code>, <code>$and</code>, <code>$not</code> and
          <code>$eq</code>.
          See below for the syntax.</p>
        <p>You can use regular expressions in two ways: in basic querying in place of a string, or with the $regex
          operator.
        </p>
        <p><em>Example of document querying:</em></p>
        <blockquote>
          <p><em>Notice</em>: See all rules and operators list <a href="https://www.npmjs.com/package/mingo">here</a>
          </p>
        </blockquote>
        <pre v-highlightjs><code class="javascript">
db.find({name:"Denyn"}, {}, (docs) =&gt; {
  console.log(docs);
});

// or

let docs = await db.find({name:"Denyn"})

// Finding unique document

let docs = await db.findOne({username:"denyncrawford"})

// Deep querying syntax:

let docs = await db.find( { fullname: { lastname: "Crawford" } })

</code></pre>
        <p>You can also use dot notation to find documents by deep querying.</p>
        <pre v-highlightjs><code class="javascript">
let docs = await db.find( { "fullname.lastname": "Crawford" })

// Using dot notation to find inside arrays:

let docs = await db.find( { "list.games.0": "Doom" })

</code></pre>
        <blockquote>
          <p>If you want to know how to advance query documents please <a
              href="https://github.com/louischatriot/nedb/#basic-querying">read this</a></p>
        </blockquote>
        <h3 id="projections">Projections</h3>
        <p>You can give <code>find</code> and <code>findOne</code> an optional second argument, projections. The syntax
          is
          the same as MongoDB: <code>{ a: 1, b: 1 }</code> to return only the a and b fields, <code>{ a: 0, b: 0
            }</code> to
          omit these two fields. You cannot use both modes at the time, except for _id which is by default always
          returned
          and which you can choose to omit. You can project on nested documents.</p>
        <blockquote>
          <p><em>Notice</em>: See all rules and operators list <a href="https://www.npmjs.com/package/mingo">here</a>
          </p>
        </blockquote>
        <pre v-highlightjs><code class="javascript">
db.find({ planet: 'Mars' }, { planet: 1, system: 1 }, function (docs) {
  // docs is [{ planet: 'Mars', system: 'solar', _id: 'id1' }]
});

</code></pre>
        <h2 id="updating-documents">🖌️ Updating documents</h2>
        <p>To update documents DnDB exposes the method:</p>
        <ul>
          <li>
            <p><code>update</code></p>
            <ul>
              <li>returns: array with the new updated collection</li>
            </ul>
          </li>
          <li>
            <p><code>updateOne</code></p>
            <ul>
              <li>returns: object with the new updated document.</li>
            </ul>
          </li>
        </ul>
        <p>The update method follows the same query rules as in <code>find</code> and <code>findOne</code> at first
          argument
          to get the update target document and as a second agument it receives the aggregation operators that modifies
          the
          matching fileds values ​​by following the aggregation rules.</p>
        <blockquote>
          <p><em>Notice</em>: See all rules and operators list <a href="https://www.npmjs.com/package/mingo">here</a>
          </p>
        </blockquote>
        <pre v-highlightjs><code class="javascript">db.update({ name: 'denyn' }, { $set: { pet: 'Boots' } }, (update) =&gt; {
  // ...foo(update)
});

// OR 

let update = await db.update({ name: 'denyn' }, { $set: { pet: 'Boots' } })
</code></pre>
        <h2 id="removing-documents">❌ Removing documents</h2>
        <p>To remove documents DnDB exposes the method:</p>
        <ul>
          <li>
            <p><code>remove</code></p>
            <ul>
              <li>returns: array with the new removed collection</li>
            </ul>
          </li>
          <li>
            <p><code>removeOne</code></p>
            <ul>
              <li>returns: object with the new removed document</li>
            </ul>
          </li>
        </ul>
        <p>The remove method follows the same query rules as in <code>find</code> and <code>findOne</code> at first
          argument, it will remove all the documents that matches the query.</p>
        <pre v-highlightjs><code class="javascript">db.remove({ _id: 'id2' }, function (newdoc) {
  // ...foo(newDoc)
});

//OR

const { remove } = db 

await remove({ _id: 'id2' })
</code></pre>
      </div>
    </div>
  </page>
</template>

<script>
import Page from '../components/structure/Page.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Page
  },
  computed: {
    ...mapState(['version'])
  }
}
</script>