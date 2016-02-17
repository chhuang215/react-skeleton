var React = require('react');
var Component = require('./Component.jsx');

var datas = [{"id":1, "text":"text1"}, {"id":2, "text":"text2"},{"id":3, "text":"text3"}];

var Manager = React.createClass({
    render: function(){
        var items = datas.map(function(item){
            return <Component key={item.id} text={item.text} />;
        });
        
        return (
            <div>
                <h2>Manager Title</h2>

                <ul>{items}</ul>
            </div>
        );
    }
});

module.exports = Manager;
