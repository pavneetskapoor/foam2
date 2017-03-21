foam.INTERFACE({
  refines: 'foam.dao.DAO',
  methods: [
    {
      name: 'put',
      swiftReturnType: 'FObject?',
      args: [
        {
          name: 'obj',
          swiftType: 'FObject'
        }
      ],
      swiftEnabled: true,
    },
    {
      name: 'remove',
      swiftReturnType: 'FObject?',
      args: [
        {
          name: 'obj',
          swiftType: 'FObject'
        }
      ],
      swiftEnabled: true,
    },
    {
      name: 'find',
      swiftReturnType: 'FObject?',
      args: [
        {
          name: 'id',
          swiftType: 'Any?'
        }
      ],
      swiftEnabled: true,
    },
    {
      name: 'select',
      swiftReturnType: 'Sink',
      args: [
        {
          name: 'sink',
          swiftType: 'Sink',
          swiftDefaultValue: 'ArraySink()',
        },
        {
          name: 'skip',
          swiftType: 'Int',
          swiftDefaultValue: '0',
        },
        {
          name: 'limit',
          swiftType: 'Int',
          swiftDefaultValue: '0',
        },
        {
          name: 'order',
          swiftType: 'Comparator?',
          swiftDefaultValue: 'nil',
        },
        {
          name: 'predicate',
          swiftType: 'FoamPredicate?',
          swiftDefaultValue: 'nil',
        }
      ],
      swiftEnabled: true,
    },
    {
      name: 'removeAll',
      args: [
        {
          name: 'skip',
          swiftType: 'Int',
          swiftDefaultValue: '0',
        },
        {
          name: 'limit',
          swiftType: 'Int',
          swiftDefaultValue: '0',
        },
        {
          name: 'order',
          swiftType: 'Comparator?',
          swiftDefaultValue: 'nil',
        },
        {
          name: 'predicate',
          swiftType: 'FoamPredicate?',
          swiftDefaultValue: 'nil',
        }
      ],
      swiftEnabled: true,
    },
    {
      name: 'pipe',
      args: [
        {
          name: 'sink',
          swiftType: 'Sink'
        }
      ],
      swiftEnabled: true,
    },
    {
      name: 'where',
      swiftReturnType: 'AbstractDAO',
      args: [
        {
          name: 'predicate',
          swiftType: 'FoamPredicate'
        }
      ],
      swiftEnabled: true,
    },
    {
      name: 'orderBy',
      swiftReturnType: 'AbstractDAO',
      args: [
        {
          name: 'comparator',
          swiftType: 'Comparator'
        }
      ],
      swiftEnabled: true,
    },
    {
      name: 'skip',
      swiftReturnType: 'AbstractDAO',
      args: [
        {
          name: 'count',
          swiftType: 'Int'
        }
      ],
      swiftEnabled: true,
    },
    {
      name: 'limit',
      swiftReturnType: 'AbstractDAO',
      args: [
        {
          name: 'count',
          swiftType: 'Int'
        }
      ],
      swiftEnabled: true,
    }
  ]
});