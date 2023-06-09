"""empty message

Revision ID: ec02055b3323
Revises: c67299ff0f77
Create Date: 2023-04-13 17:40:24.702247

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ec02055b3323'
down_revision = 'c67299ff0f77'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('customer', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.String(length=80), nullable=False))
        batch_op.create_unique_constraint(None, ['name'])

    with op.batch_alter_table('product', schema=None) as batch_op:
        batch_op.alter_column('customer_id',
               existing_type=sa.INTEGER(),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('product', schema=None) as batch_op:
        batch_op.alter_column('customer_id',
               existing_type=sa.INTEGER(),
               nullable=False)

    with op.batch_alter_table('customer', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('name')

    # ### end Alembic commands ###
